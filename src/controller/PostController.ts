import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";



export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;

    const userIdInt = parseInt(userId);

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId: userIdInt
      }
    });

    return res.status(201).json({
      message: "Post created successfully",
      data: post
    });

  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Failed to create post"
    });
  }
};
 export const getPosts = async(req:Request,res:Response) =>{
    try{
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to fetch posts"});
    }
}