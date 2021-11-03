const router = require("express").Router();

const landingPageRoutes = require("./landingPage-routes");
const searchPageRoutes = require("./searchPage-routes");

const dashboardRoutes = require("./dashboard-routes");

router.use("/", landingPageRoutes);
router.use("/search", searchPageRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
