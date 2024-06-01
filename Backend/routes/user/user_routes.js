import express from "express";
import { loginUser, registerUser } from "../../controllers/user/user_controllers.js";

const router = express.Router();

// this is the register user route
router.post("/register", registerUser)

// this is the login user route
router.post("/login", loginUser)

export default router;