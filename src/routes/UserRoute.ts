import { Router } from "express";
import { createUser, getUsers } from "../controller/UserController";


const router = Router();

router.post("/create", createUser);
router.get("/fetch", getUsers);

export default router;
