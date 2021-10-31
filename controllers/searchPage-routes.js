const router = require("express").Router();

// Route to home page (search Page)
router.get("/", async (req, res) => {
  res.render("search", {
    layout: "searchPage",
  });
});

module.exports = router;