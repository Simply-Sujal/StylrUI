import express from "express";
import { loginUser, registerUser } from "../../controllers/user/user_controllers.js";
import authMiddleware from "../../middlewares/auth_middlewares.js";

const router = express.Router();

// this is the register user route
router.post("/register", registerUser)

// this is the login user route
router.post("/login", loginUser)

// protected route
router.get("/protected", authMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "This is from the protected route"
    })
})

export default router;