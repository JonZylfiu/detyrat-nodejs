import express from "express";
// import { login, register } from "../controllers/users.controller.js";
import { authToken } from "../middleware/auth.token.js";

const router = express.Router();

//locahost:3000/users - method GET
// router.get("/", authToken, userController.getAllUsers);

//localhost:3000/users/id- METHOD GET
// router.get("/:id", getAllUsers());


export default router;
