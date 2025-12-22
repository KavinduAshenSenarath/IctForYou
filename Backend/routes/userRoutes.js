import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
//Register user
router.post("/register", registerUser);
// Login user
router.post("/login", loginUser);
// protected route 
router.get("/profile", protect, getUserProfile);

export default router;