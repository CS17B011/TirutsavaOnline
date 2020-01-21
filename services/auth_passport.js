const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const GoogleUser = require('../models/GoogleUser.js');
const LocalUser = require('../models/LocalUser.js');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, done) => {
        //console.log(profile);
        GoogleUser.findOne({ googleid: profile.id })
            .then((user) => {
                if (user)
                {
                    //user exist.
                    done(null, user);
                }
                else
                {
                    //new user
                    const NewGoogleUser = GoogleUser({
                        googleid: profile.id,
                        name: profile._json.name,
                        email: profile._json.email,
                        gender: profile._json.gender
                    });
                    NewGoogleUser.save()
                        .then((GoogleUser) => {
                            done(null, GoogleUser);
                        });
                }
            });
    }
));

passport.use(new LocalStrategy(
    (username,password,done) => {
        //console//console.log("Local Auth Route");
        //console.log(username, password);
        LocalUser.findOne({ email: username })
            .then((user) => {
                if(user)
                {
                    //console.log("User found!!");
                    bcrypt.compare(password, user.password, (err, res) => {
                        if (res == true)
                        {
                            done(null, user);
                            //console.log("Auth");
                        }
                        else
                            done(null, false);
                    });
                }
                else
                    done(null, false);
            })
            .catch((err) => {
                done(err);
            });
    }
  ));