require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./config/database");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});