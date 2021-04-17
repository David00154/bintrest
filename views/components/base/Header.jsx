import React, { useState } from "react";

export default function Header(props) {
  let [routes] = useState([
    {
      class: "nav-link scrollto",
      name: "Home",
      href: "/",
    },
    {
      class: "nav-link scrollto",
      name: "Login",
      href: "/user/login",
    },
    {
      class: "nav-link scrollto",
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      class: "nav-link scrollto",
      name: "Signup",
      href: "/user/signup",
    },
    {
      class: "nav-link scrollto",
      name: "Contact",
      href: "/#contact",
    },
  ]);
  return (
    <div>
      {/* // <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">BINTREST</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar">
            <ul>
              {routes.map((route, i) => {
                return (
                  <li key={i}>
                    <a className={route.class} href={route.href}>
                      {route.name}
                    </a>
                  </li>
                );
              })}
              {/* <li><a className="nav-link scrollto" href="/">Home</a></li> */}
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              {/* <!-- <li><a className="nav-link scrollto" href="#services">Services</a></li> --> */}
              {/* <!-- <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> --> */}
              {/* <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li> */}
              {/* <li>
                <a className="nav-link scrollto" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/signup">
                  Signup
                </a>
              </li> */}
              {/* <!-- <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> --> */}
              {/* <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
}
