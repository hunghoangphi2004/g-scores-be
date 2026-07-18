const scoreService = require("../services/score.service");

const getScoreBySbd = async (req, res) => {
    const sbd = req.params.sbd;
    try {
        const score = await scoreService.getScoreBySbd(sbd);

        if (!score) {
            return res.status(200).json({
                success: false,
                message: "Không tìm thấy sbd"
            })
        }
        return res.status(200).json({
            success: true,
            score: score
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

module.exports = { getScoreBySbd }