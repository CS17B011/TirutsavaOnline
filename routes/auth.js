const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalUser = require('../models/LocalUser.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const loggedin = require('../services/middleware');

router.post('/registration', (req, res) => {
    LocalUser.findOne({ email: req.body.email })
        .then(user => {
            if (user)
                res.send({ exist: true, valid: false });
            else {
                bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                    const localUser = LocalUser({
                        email: req.body.email,
                        password: hash,
                        name: req.body.name,
                        college: req.body.college,
                        city: req.body.city,
                        state: req.body.state,
                        phonenum: req.body.phoneNo,
                        gender: req.body.gender
                    });
                    localUser.save()
                        .then(user => {
                            res.send({ valid: true });
                        });
                });
            }
        })
        .catch(err => {
            res.send({ exist: false, valid: false });
        });
});

router.get('/logout', loggedin ,(req, res) => {
    req.logout();
    res.send({ logout: true });
});

router.post('/local', passport.authenticate('local', {failureRedirect:'/jsonfail'}), (req, res) => {
    console.log("User...");
    console.log(req.isAuthenticated());
    res.send({ valid: true ,user:req.user});
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/dashboard', loggedin ,(req, res) => {
    console.log("Dashboard");
    console.log(req.session.passport);
});

//Call back Route
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.send(req.user);
});


module.exports = router;