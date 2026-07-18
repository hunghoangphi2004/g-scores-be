const statisticService = require("../services/statisticService")

const getSubjectStatistics = async(req, res) => {
    try {
        const subject = req.params.subject;
        const result = await statisticService.getSubjectStatistics(subject);


        res.status(200).json({
            success: true,
            result: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

const getTop10GroupA = async (req, res) => {
    try {
        const result = await statisticService.getTop10GroupA();

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {getSubjectStatistics, getTop10GroupA}