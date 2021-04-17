import React from "react";
import AuthLayout from "./_layouts/AuthLayout.jsx";
import Alerts from "./components/Alerts.jsx";

export default function SignIn(props) {
  // console.log(props);
  return (
    <AuthLayout>
      <div className="card card-container">
        {/* <!-- <img className="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> --> */}
        {/* <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" /> */}
        {/* <p id="profile-name" className="profile-name-card">Blah</p> */}
        <Alerts {...props} />
        {/* {props.error_msg != "" ? <Alerts errors={props.error_msg} /> : ""} */}
        <form className="form-signin" action="/user/login" method="POST">
          <h2 className="text-center mb-3">Login</h2>
          <div className="mb-3">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              name="email"
              autofocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              name="password"
            />
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
            Sign in
          </button>
        </form>
        {/* <a href="#" className="forgot-password">
          Forgot the password?
        </a> */}
        <p className="loginhere">
          Don't have an account ?{" "}
          <a href="/user/signup" className="loginhere-link">
            Signup here
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
