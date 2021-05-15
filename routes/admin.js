import express from "express";
import Notification from "../models/notifications.model.js";
import User from "../models/user.model.js";
import adminGuard from "../services/guards/adminGuard.js";
// import ensureAuthenticated from "../services/guards/useAuthGuard.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.render("Dashboard", { user: req.user, pathname: req._parsedOriginalUrl });
});

router.get("/deposit", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Deposit", { user: req.user, pathname: req._parsedOriginalUrl });
});

router.get("/notification/:id", async (req, res) => {
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

router.get("/withdraw", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Withdraw", { user: req.user, pathname: req._parsedOriginalUrl });
});

router.get("/notifications", (req, res) => {
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

router.get("/delete-user", adminGuard, (req, res) => {
  res.render("DeleteUser", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
});

router.post("/delete-user", adminGuard, (req, res) => {
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

router.post("/withdraw", (req, res) => {
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
    // !select ||
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
      content: `Hello ${req.user.name} your account is not activated for WITHDRAWALS yet, a notification will be sent to you to go about it. Thank you.
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

router.get("/users", adminGuard, (req, res) => {
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

router.get("/send-notifications", adminGuard, (req, res) => {
  res.render("SendNotifications", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
});

router.post("/send-notifications", adminGuard, (req, res) => {
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

router.get("/manipulate-user", adminGuard, (req, res) => {
  res.render("Manipulate", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
});

router.post("/update-user", adminGuard, (req, res) => {
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

const DashboardRouter = router;

export default DashboardRouter;
