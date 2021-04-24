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

export default adminGuard;
