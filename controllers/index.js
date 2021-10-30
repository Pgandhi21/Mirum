const router = require("express").Router();

const apiRoutes = require("./api/");
const landingPageRoutes = require("./landingPage-routes");
const searchPageRoutes = require("./searchPage-routes");

router.use("/", landingPageRoutes);
router.use("/search", searchPageRoutes);
router.use("/api", apiRoutes);

module.exports = router;
