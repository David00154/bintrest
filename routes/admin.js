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
  req.flash("error_msg", "Your balance is not yet matured for withdrawals");
  res.redirect("/dashboard/withdraw");
});

const DashboardRouter = router;

export default DashboardRouter;
