const express = require('express');
const app = express();
const EntryRoutes = require("./routes/EntryRoutes").default;
app.use(express.json());

// Routes
app.use("/entry", EntryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running on port 3001'));