const router = require("express").Router();
const User = require("../models/User");

// Route to home page (landing Page)
router.get("/", async (req, res) => {
  res.render("loginSignUp", {
    layout: "landingPage",
  });
});

router.post("/signup", async (req, res) => {
 
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
   
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204);
    });
  } else {
    res.status(404).json(err);
  }
});



module.exports = router;
