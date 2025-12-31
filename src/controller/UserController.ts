import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

// Create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      }
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create user" });
  }
};

// Get all users 
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
