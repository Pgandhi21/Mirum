const router = require("express").Router();

const questionRoutes = require("./question-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/dashboard", dashboardRoutes);
router.use("/question", questionRoutes);

module.exports = router;
