const Score = require("../models/score.model");

const getScoreBySbd = async (sbd) => {
    const score = await Score.findOne({ sbd: sbd }).select("-_id -__v -createdAt -updatedAt").lean();
    return score;
}

module.exports = {getScoreBySbd}