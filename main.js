import express from "express";
import { join, resolve } from "path";
import IndexRouter from "./routes/index.js";
import DashboardRouter from "./routes/admin.js";
import UserRouter from "./routes/user.js";
import flash from "connect-flash";
import session from "express-session";
import { createEngine } from "express-react-views";
import passport from "passport";
import _passport from "./services/passport.js";
import ensureAuthenticated from "./services/guards/useAuthGuard.js";

import mongoose from "mongoose";

const app = express();

const db1 =
  "mongodb+srv://davidbriggs:00154abs@cluster001.ueang.mongodb.net/bintrest?retryWrites=true&w=majority";

const db2 = "mongodb://localhost/bintrest";
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

export default app;
