import { Router } from 'express';
const router = Router();

// Import coontroller
import * as UserController from "../controllers/UserController.js";

// Map to correct function
router.post("/signup", UserController.default.signUp);
router.post("/login", UserController.default.login);
router.get("/", UserController.default.getAllUsers);

export default router;
