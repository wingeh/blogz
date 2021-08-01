// dependencies
const router = require('express').Router();
const { User } = require('../../models');

// register
router.post('/register', async (req, res) => {
    try {
      const registerData = await User.create(req.body);
      req.session.user_id = registerData.id;
      req.session.logged_in = true; 
      res.status(200).json(registerData);
    } catch (err) {
      res.status(400).json(err);
    }
})

// login
router.post('/login', async (req, res) => {
    try {
        // validate user
        const userData = await User.findOne({ where: {email: req.body.email } });
        if (!userData) {
            res.status(400).json({ message: 'Email and/or password are incorrect, please try again' });
            return;
        };
        
        // validate password
        const validPassword = userData.checkPassword(req.body.password);
        
        if (!validPassword) {
          res.status(400).json({ message: 'Email and/or password are incorrect, please try again' });
            return;
        };
        
        // begin session
        req.session.user_id = userData.id;
        req.session.logged_in = true; 
        res.json({ user: userData, message: 'You are logged in.' });
   
    // error handling
    } catch (err) {
        res.status(400).json(err);
    }
});
  
// logout
router.post('/logout', async (req, res) => {
    // end session
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
            res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
        // error handling
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;