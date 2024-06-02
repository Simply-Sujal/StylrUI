import express from "express";
import requireLogin from "../../middlewares/auth_middlewares.js"
import postCode from "../../controllers/code/code.controllers.js";

const router = express.Router();

router.post("/codesubmission", requireLogin, postCode)

export default router;