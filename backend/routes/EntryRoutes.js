import { Router } from 'express';
const router = Router();

// Import coontroller
import * as EntryController from "../controllers/EntryController";

// Map to correct function
router.get("/", EntryController.getAllEntries);
router.get("/:id", EntryController.getEntryById);
router.post("/", EntryController.createEntry);
router.delete("/:id", EntryController.deleteEntryById);

// Export the router correctly
export default router;
