import { Strategy } from "passport-local";

import User from "../models/user.model.js";

const _passport = function (passport) {
  passport.use(
    new Strategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email,
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: "That email is not registered" });
        }

        // Match password
        if (password == user.password) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Password incorrect" });
        }
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};

export default _passport;
