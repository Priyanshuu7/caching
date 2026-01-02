import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import {redis} from "../../lib/redis";

/**
 * CREATE POST
 * - Saves post in DB
 * - Invalidates Redis cache
 */
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;
  
    const userIdInt = Number(userId);
    if (isNaN(userIdInt)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId: userIdInt,
      },
    });

    await redis.del("posts:all");

    return res.status(201).json({
      message: "Post created successfully",
      data: post,
    });

  } catch (error) {
    console.error("Create post error:", error);
    return res.status(500).json({
      message: "Failed to create post",
    });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const cacheKey = "posts:all";

    // Check Redis cache
    const cachedPosts = await redis.get(cacheKey);
    if (cachedPosts) {
      console.log(" Posts served from Redis");
      return res.status(200).json(JSON.parse(cachedPosts));
    }

    // Get posts from DB
    const posts = await prisma.post.findMany({
      orderBy: { id: "desc" },
    });

    //  Cache for 60 seconds
    await redis.set(cacheKey, JSON.stringify(posts), "EX", 60);

    console.log("Posts served from DB & cached");
    return res.status(200).json(posts);

  } catch (error) {
    console.error("Get posts error:", error);
    return res.status(500).json({
      message: "Failed to fetch posts",
    });
  }
};
