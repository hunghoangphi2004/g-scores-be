const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/score.controller");

router.get("/:sbd", scoreController.getScoreBySbd);

module.exports = router;