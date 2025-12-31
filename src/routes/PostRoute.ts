import { Router } from "express";
import { createPost, getPosts } from "../controller/PostController";


const router = Router();

router.post("/create", createPost);
router.get("/fetch", getPosts);

export default router;
