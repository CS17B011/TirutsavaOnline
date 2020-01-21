const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalUser = require('../models/LocalUser.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const loggedin = require('../services/middleware');
const GoogleUser = require('../models/GoogleUser');

router.get('/status', (req, res) => {
  if (req.isAuthenticated())
    res.send({ loggedin: true });
  else
    res.send({ loggedin: false });
})

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

router.get('/logout', loggedin, (req, res) => {
  req.logout();
  res.send({ logout: true });
});

router.post('/local', passport.authenticate('local', { failureRedirect: '/jsonfail' }), (req, res) => {
  console.log("User...");
  console.log(req.isAuthenticated());
  res.send({ valid: true });
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/dashboard', loggedin, (req, res) => {
  var person = {};
  var events = [];
  var user = req.session.passport.user;
  console.log("Printing User");
  console.log(user);
  if (user.googleid) {
    GoogleUser.findOne({ _id: user._id })
      .then(nuser => {
        user = nuser;
        person.name = user.name;
        person.email = user.email;
        person.college = user.college;
        person.phonenum = user.phonenum;
        person.state = user.state;



        for (var i = 0; i < user.registeredeventids.length; i++) {
          console.log("In Loop");
          var newEvent = {};
          Event.findOne({ eventId: user.registeredeventids[i] }).then(event => {
            newEvent.name = event.name;
            console.log("Event Found...");
            if (event.typeOfEvent === 1) {
              newEvent.type = "Technical";
            } else if (event.typeOfEvent === 2) {
              newEvent.type = "Cultural";
            } else if (event.typeOfEvent === 3) {
              newEvent.type = "Online";
            } else if (event.typeOfEvent === 4) {
              newEvent.type = "Prefest";
            } else if (event.typeOfEvent === 5) {
              newEvent.type = "Workshop";
            } else if (event.typeOfEvent === 6) {
              newEvent.type = "Informals";
            }
            newEvent.eventId = event.eventId;
            events.push(newEvent);
          })
            .catch(err => console.error(err));
        }
        var output = {
          person: person,
          events: events
        }
        console.log("Final output");
        console.log(output);
        res.send(output);
      })
      .catch(err => {
        console.log(err);
      });
  }
  else {
    LocalUser.findOne({ _id: user.id })
      .then(nuser => {
        user = nuser;
        person.name = user.name;
        person.email = user.email;
        person.college = user.college;
        person.phonenum = user.phonenum;
        person.state = user.state;
        
        for (var i = 0; i < user.registeredeventids.length; i++) {
          console.log("In Loop");
          var newEvent = {};
          Event.findOne({ eventId: user.registeredeventids[i] })
            .then(event => {
            newEvent.name = event.name;
            console.log("Event Found...");
            if (event.typeOfEvent === "1") {
              newEvent.type = "Technical";
            } else if (event.typeOfEvent === "2") {
              newEvent.type = "Cultural";
            } else if (event.typeOfEvent === "3") {
              newEvent.type = "Online";
            } else if (event.typeOfEvent === "4") {
              newEvent.type = "Prefest";
            } else if (event.typeOfEvent === "5") {
              newEvent.type = "Workshop";
            } else if (event.typeOfEvent === "6") {
              newEvent.type = "Informals";
            }
            newEvent.eventId = event.eventId;
            console.log("New Eevnt: ", newEvent);
            events.push(newEvent);
            console.log("events: ", events);
          })
            .catch(err => console.error(err));
        }
        var output = {
          person: person,
          events: events
        }
        console.log("Final output");
        console.log(output);
        res.send(output);
      })
      .catch(err => {
        console.log(err);
      });
  }

});

//Call back Route
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost/'); //'http://tirutsava.com'
});


module.exports = router;