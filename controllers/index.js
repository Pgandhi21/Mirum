const router = require("express").Router();

const landingPageRoutes = require("./landingPage-routes");
const searchPageRoutes = require("./searchPage-routes");
const questionRoutes = require("./question-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/dashboard", dashboardRoutes);
router.use("/question", questionRoutes);
router.use("/", landingPageRoutes);
router.use("/search", searchPageRoutes);

module.exports = router;
