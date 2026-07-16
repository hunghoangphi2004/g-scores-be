const scoreRoutes = require("./score.routes");
const statisticRoutes = require("./statistic.routes")

const routes = (app) => {
    app.use("/api/scores", scoreRoutes);
    app.use("/api/statistics", statisticRoutes);
}

module.exports = routes;