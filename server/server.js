const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");

dotenv.config();
const app = express();
app.use(express.json());

dbConnection();

app.use("/api", userRoute);
app.use("/api/todo", todoRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
