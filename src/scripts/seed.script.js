require("dotenv").config();

const path = require("path");

const connectDB = require("../config/database");

const parseCSV = require("./parser.script");
const importScores = require("./importer.script");

const seed = async () => {
    try {
        await connectDB();

        const filePath = path.join(__dirname, "../data/diem_thi_thpt_2024.csv");

        const scores = await parseCSV(filePath);

        await importScores(scores);

        console.log("Seed completed.");

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seed();