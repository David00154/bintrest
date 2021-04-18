import express from "express";
// import ensureAuthenticated from "../services/guards/useAuthGuard.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.render("Dashboard", { user: req.user, pathname: req._parsedOriginalUrl });
});

router.get("/deposit", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Deposit", { user: req.user, pathname: req._parsedOriginalUrl });
});

router.get("/withdraw", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Withdraw", { user: req.user, pathname: req._parsedOriginalUrl });
});

router.get("/notifications", (req, res) => {
  // console.log(req._parsedOriginalUrl);
  res.render("Notifications", {
    user: req.user,
    pathname: req._parsedOriginalUrl,
  });
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
  } = req.body;
  console.log(req.body);

  let errors = [];

  if (
    !amount ||
    !select ||
    !email ||
    !password ||
    !re_password ||
    !phone ||
    !country
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
  } else {
    req.flash(
      "error_msg",
      "Your account is not yet activated for withdrawals <a class='font-bold' href='/dashboard/notifications'>Click here to know more..</a>"
    );
    res.redirect("/dashboard/withdraw");
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

const DashboardRouter = router;

export default DashboardRouter;
