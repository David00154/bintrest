const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error_msg", "Please log in to view this resource..");
    res.redirect("/user/login");
  }
};

export default ensureAuthenticated;
