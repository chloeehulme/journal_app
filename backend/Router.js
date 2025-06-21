import express, { json } from 'express';
import EntryRoutes from "./routes/EntryRoutes.js";
import UserRoutes from "./routes/UserRoutes.js"
import dotenv from 'dotenv';

import { authenticateToken } from './middleware/authenticateToken.js';

dotenv.config();
const app = express();
app.use(json());

// Routes
app.use("/entry", authenticateToken, EntryRoutes); // Protected routes
app.use("/user", UserRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server running on port 3001'));