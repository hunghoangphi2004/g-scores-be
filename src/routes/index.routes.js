const scoreRoutes = require("./score.routes");

const routes = (app) => {
    app.use("/api/scores", scoreRoutes);
}

module.exports = routes;