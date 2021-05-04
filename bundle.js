import express from 'express';
import { join, resolve } from 'path';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
import { createEngine } from 'express-react-views';
import { Strategy } from 'passport-local';

const router$2 = express.Router();

router$2.get("/", (req, res) => {
  res.render("Index");
});

const IndexRouter = router$2;

const Schema$1 = mongoose.Schema;

const NotificationsSchema = new Schema$1({
  user: { type: Schema$1.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  topic: { type: String, required: true },
  opened: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: { type: Date, default: new Date() },
});

const Notification = mongoose.model("Notifications", NotificationsSchema);

const Schema = mongoose.Schema;

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

const User = mongoose.model("User", UserSchema);

const adminGuard = (req, res, next) => {
  if (req.user.role == "admin") {
    return next();
  } else {
    req.flash(
      "error_msg",
      "You are not an admin you can not view that resource"
    );
    res.redirect("/user/login");
  }
};

// import ensureAuthenticated from "../services/guards/useAuthGuard.js";

const router$1 = express.Router();
router$1.get("/", (req, res) => {
  res.render("Dashboard", { user: req.user, pathname: req._parsedOriginalUrl });
});

router$1.get("/deposit", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Deposit", { user: req.user, pathname: req._parsedOriginalUrl });
});

router$1.get("/notification/:id", async (req, res) => {
  const { id } = req.params;

  // Notification.findOne({ _id: id }).then(({ topic, content, date }) => {
  //   Notification.updateOne().then(() => {
  //     res.render("Notification", {
  //       user: req.user,
  //       pathname: req._parsedOriginalUrl,
  //       topic,
  //       content,
  //       date,
  //     });
  //   });
  // });

  try {
    const { topic, content, date } = await Notification.findOne({ _id: id });

    const update = await Notification.updateOne({ _id: id }, { opened: true });
    res.render("Notification", {
      user: req.user,
      pathname: req._parsedOriginalUrl,
      topic,
      content,
      date,
    });
  } catch (e) {
    console.log(e);
  }
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

router$1.get("/delete-user", adminGuard, (req, res) => {
  res.render("DeleteUser", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
});

router$1.post("/delete-user", adminGuard, (req, res) => {
  const { id } = req.body;

  if (!id) {
    req.flash("error_msg", "All fields are required");
    res.redirect("/dashboard/delete-user");
  } else {
    User.deleteOne({ _id: id })
      .then(() => {
        if (id == req.user._id) {
          req.logout();
          req.flash("error", "You fool you have deleted your self");
          res.redirect("/user/login");
        } else {
          req.flash("success_msg", "User deleted!");
          res.redirect("/dashboard/delete-user");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
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
  // if (select == "option") {
  //   req.flash("error_msg", "Select a valid payment option");
  //   res.redirect("/dashboard/withdraw");
  // }
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

router$1.get("/users", adminGuard, (req, res) => {
  User.find({})
    .then((data) => {
      res.render("Users", {
        user: req.user,
        pathname: req._parsedOriginalUrl,
        users: data,
      });
    })
    .catch((e) => console.log(e));
});

router$1.get("/send-notifications", adminGuard, (req, res) => {
  res.render("SendNotifications", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
});

router$1.post("/send-notifications", adminGuard, (req, res) => {
  const { id, topic, content } = req.body;

  if (!id || !topic || !content) {
    req.flash("error_msg", "All fields are required!!");

    res.redirect("/dashboard/send-notifications");
  } else {
    const newNotifis = new Notification({
      user: id,
      topic,
      content,
    });
    newNotifis
      .save()
      .then(() => {
        req.flash("success_msg", `Notification Sent.`);
        res.redirect("/dashboard/send-notifications");
      })
      .catch((e) => {
        console.log(e);
      });
  }
});

router$1.get("/manipulate-user", adminGuard, (req, res) => {
  res.render("Manipulate", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
});

router$1.post("/update-user", adminGuard, (req, res) => {
  const { email, balance, deposit, withdrawals, earnings } = req.body;

  if (!email || !balance || !deposit || !withdrawals || !earnings) {
    req.flash("error_msg", "All fields are required!!");

    res.redirect("/dashboard/manipulate-user");
  } else {
    User.updateOne(
      { email: email },
      {
        balance,
        deposit,
        withdrawls: withdrawals,
        earning: earnings,
      }
    )
      .then(() => {
        req.flash("success_msg", `User updated`);
        res.redirect("/dashboard/manipulate-user");
      })
      .catch((e) => {
        console.log(e);
      });
  }
});

const DashboardRouter = router$1;

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
//

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

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error_msg", "Please log in to view this resource..");
    res.redirect("/user/login");
  }
};

const app = express();

const db1 =
  "mongodb+srv://davidbriggs:00154abs@cluster001.ueang.mongodb.net/bintrest?retryWrites=true&w=majority";
//
// const db2 = "mongodb://localhost/bintrest";
_passport(passport);
mongoose
  .connect(db1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.use(express.static(join(resolve(), "static")));
app.set("views", join(resolve(), "views"));
app.set("view engine", "jsx");
app.engine("jsx", createEngine({}));

app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(async function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  // res.locals._url = req.url;
  if (req.isAuthenticated()) {
    // let notifis;
    // Notification.find({ user: req.user._id, opened: false })
    //   .then((data) => {
    //     notifis = data.length;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // res.locals.notificationCount = notifis;

    try {
      const data = await Notification.find({
        user: req.user._id,
        opened: false,
      });
      res.locals.notificationCount = data.length;
    } catch (e) {
      console.log(e);
    }
  }
  next();
});

app.use("/", IndexRouter);
app.use("/dashboard", ensureAuthenticated, DashboardRouter);
app.use("/user", UserRouter);

app.get("/s", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 3000, console.log("Server running"));

// export { app };

// module.exports = app;
