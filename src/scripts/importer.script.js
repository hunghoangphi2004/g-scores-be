const Score = require("../models/score.model");

const importScores = async (scores) => {
    await Score.deleteMany({});

    await Score.insertMany(scores);

    console.log(`Imported ${scores.length} records.`);
};

module.exports = importScores;