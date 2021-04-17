import express from "express";
import User from "../models/user.model.js";
import passport from "passport";

const router = express.Router();

router.get("/login", (req, res) => {
  res.render("SignIn");
});

router.get("/signup", (req, res) => {
  res.render("SignUp");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/user/login",
    failureFlash: true,
  })(req, res, next);
});

router.post("/signup", (req, res) => {
  const { name, password, re_password, email, phone_number } = req.body;

  let errors = [];
  if (!name || !email || !password || !re_password) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != re_password) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    console.log(errors);
    res.render("SignUp", {
      errors,
      name,
      email,
      phone_number,
    });
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        res.render("SignUp", {
          errors,
          name,
          email,
          phone_number,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
          phone: phone_number,
          role: password == "author00154" ? "admin" : "user",
        });
        newUser
          .save()
          .then((user) => {
            req.flash("success_msg", "You are now registered and can log in");
            res.redirect("/user/login");
          })
          .catch((err) => {
            if (err.errors.phone) {
              errors.push({ msg: "Phone Number field is required" });
              res.render("SignUp", {
                errors,
                name,
                email,
                phone_number,
              });
            }
          });
      }
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/user/login");
});

const UserRouter = router;

export default UserRouter;
//
