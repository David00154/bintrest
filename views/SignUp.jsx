import React from "react";
import AuthLayout from "./_layouts/AuthLayout.jsx";
import Alerts from "./components/Alerts.jsx";

export default function SignUp(props) {
  return (
    <AuthLayout title={"Signup"}>
      <div className="card card-container">
        {/* <!-- <img className="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> --> */}
        {/* <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" /> */}
        <p id="profile-name" className="profile-name-card"></p>

        <Alerts {...props} />

        <form className="form-signin" action="/user/signup" method="POST">
          <h2 className="text-center mb-3">Signup</h2>
          <div className="mb-3">
            <div className="input-group-prepend" style={{ display: "flex" }}>
              <span className="input-group-text">
                <span className="bx bxs-user"></span>
              </span>
              <input
                type="name"
                id="inputEmail"
                className="form-control"
                placeholder="Name"
                name="name"
                autofocus
                value={props.name || ""}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group-prepend" style={{ display: "flex" }}>
              <span className="input-group-text">
                <span className="bx bxs-message"></span>
              </span>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                name="email"
                autofocus
                value={props.email || ""}
              />
            </div>
          </div>
          <div className=" mb-3">
            <div className="input-group-prepend" style={{ display: "flex" }}>
              <span className="input-group-text">
                <span className="bx bxs-key"></span>
              </span>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>

          {/* <div className="input-group mb-3">
            <div className="input-group-prepend" style={{ display: "flex" }}>
              <span className="input-group-text">Email</span>
              </div></div> */}

          <div className="mb-3">
            <div className="input-group-prepend" style={{ display: "flex" }}>
              {/* <span className="input-group-text">Repeat Password</span> */}
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Repeat Password"
                name="re_password"
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group-prepend" style={{ display: "flex" }}>
              <span className="input-group-text">
                <span className="bx bxs-phone"></span>
              </span>
              <input
                type="text"
                id=""
                className="form-control"
                placeholder="Phone Number"
                name="phone_number"
                value={props.phone_number || ""}
              />
            </div>
          </div>
          {/* <div id="remember" className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
          <button
            className="btn btn-lg btn-primary btn-block btn-signin mb-3"
            type="submit"
          >
            Sign up
          </button>
        </form>
        {/* <a href="#" className="forgot-password">
          Forgot the password?
        </a> */}
        <p className="loginhere">
          Have already an account ?{" "}
          <a href="/user/login" className="loginhere-link">
            Login here
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
