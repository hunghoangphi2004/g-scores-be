const Score = require("../models/score.model");

const getScoreBySbd = (req, res) => {
    const sbd = req.params.sbd;
    console.log(sbd)
    try {
        res.status(200).json({
            success: true,
            sbd: sbd
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {getScoreBySbd}