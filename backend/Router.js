import express, { json } from 'express';
const app = express();
import EntryRoutes from "./routes/EntryRoutes.js";
app.use(json());

// Routes
app.use("/entry", EntryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running on port 3001'));