require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index.routes");

const connectDB = require("./config/database");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

connectDB();

routes(app);

app.listen(PORT, () => {
    console.log(`Chương trình chạy trên cổng ${PORT}`);
});