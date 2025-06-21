import { Router } from 'express';
const router = Router();

// Import controller
import * as EntryController from "../controllers/EntryController.js";

// Map to correct function
router.get("/", EntryController.default.getAllEntries);
router.get("/:id", EntryController.default.getEntryById);
router.post("/", EntryController.default.createEntry);
router.delete("/:id", EntryController.default.deleteEntryById);

export default router;
