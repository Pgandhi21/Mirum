const router = require('express').Router();


// Route to home page (landing Page)
router.get('/', async (req, res) => {
  res.render('loginSignUp', {
        layout: 'landingPage',
      });
});



module.exports = router;
