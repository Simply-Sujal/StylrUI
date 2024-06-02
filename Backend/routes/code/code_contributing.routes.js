import express from "express";
import requireLogin from "../../middlewares/auth_middlewares.js"
import { postCode, getCodesByCategory, getAcceptedCodesByUser } from "../../controllers/code/code.controllers.js";

const router = express.Router();

// this is the route for submission of the code for review
router.post("/codesubmission", requireLogin, postCode)

// this is the route for getting all codes by category
router.get("/category/:category", getCodesByCategory)

// this is the route for getting all codes info by the logged in user in their profile
router.get("/acceptedcodes", requireLogin, getAcceptedCodesByUser)


export default router;