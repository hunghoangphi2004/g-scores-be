const express = require("express");
const router = express.Router();
const statisticController = require("../controllers/statistic.controller");

router.get("/get-top-10-group-A", statisticController.getTop10GroupA);
router.get("/:subject", statisticController.getSubjectStatistics);

module.exports = router;