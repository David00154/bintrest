import React from "react";
import Header from "../components/base/Header";
import TopBar from "../components/base/TopBar";
import TradingWidgetView from "../components/base/TradingWidgetView";
import Footer from "../components/base/Footer";

export default function AuthLayout(props) {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>{props.title} | BINTREST CRYPTO TRADE</title>

          {/* <!-- Font Icon --> */}

          <link
            href="/assets/vendor/bootstrap/css/bootstrap.css"
            rel="stylesheet"
          />

          <link
            href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="/assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="/assets/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link
            href="/assets/vendor/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />

          {/* <!-- Template Main CSS File --> */}
          <link href="/assets/css/style.css" rel="stylesheet" />

          {/* <!-- Main css --> */}
          <style jsx>{`
            body,
            html {
              height: 100vh;
              background-repeat: no-repeat;

              margin: 0;
              padding: 0;
            }

            .card-container.card {
              max-width: 430px;
              padding: 40px 40px;
            }

            .btn {
              font-weight: 700;
              height: 36px;
              -moz-user-select: none;
              -webkit-user-select: none;
              user-select: none;
              cursor: default;
            }

            /*
           * Card component
           */
            .card {
              background-color: #f7f7f7;
              /* just in case there no content*/
              padding: 20px 25px 30px;
              margin: 0 auto 25px;
              margin-top: 50px;
              /* shadows and rounded borders */
              -moz-border-radius: 2px;
              -webkit-border-radius: 2px;
              border-radius: 2px;
              -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
              -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
              box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
            }

            .profile-img-card {
              width: 96px;
              height: 96px;
              margin: 0 auto 10px;
              display: block;
              -moz-border-radius: 50%;
              -webkit-border-radius: 50%;
              border-radius: 50%;
            }

            .reauth-email {
              display: block;
              color: #404040;
              /*line-height: 2;*/
              margin-bottom: 10px;
              font-size: 5rem;
              font-weight: 500;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }

            /*
           * Form styles
           */
            .profile-name-card {
              font-size: 16px;
              font-weight: bold;
              text-align: center;
              margin: 10px 0 0;
              min-height: 1em;
            }

            .reauth-email {
              display: block;
              color: #404040;
              line-height: 2;
              margin-bottom: 10px;
              font-size: 14px;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }

            .form-signin #inputEmail,
            .form-signin #inputPassword {
              direction: ltr;
              height: 44px;
              font-size: 16px;
            }

            .form-signin input[type="email"],
            .form-signin input[type="password"],
            .form-signin input[type="text"],
            .form-signin button {
              width: 100%;
              display: block;
              margin-bottom: 10px;
              z-index: 1;
              position: relative;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }

            .form-signin .form-control:focus {
              border-color: rgb(104, 145, 162);
              outline: 0;
              -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                0 0 8px rgb(104, 145, 162);
              box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                0 0 8px rgb(104, 145, 162);
            }

            .btn.btn-signin {
              /*background-color: #4d90fe; */
              background-color: rgb(104, 145, 162);
              /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/
              /*padding: 0px;*/
              font-weight: 700;
              font-size: 14px;
              height: 36px;
              -moz-border-radius: 3px;
              -webkit-border-radius: 3px;
              border-radius: 3px;
              border: none;
              -o-transition: all 0.218s;
              -moz-transition: all 0.218s;
              -webkit-transition: all 0.218s;
              transition: all 0.218s;
            }

            .btn.btn-signin:hover,
            .btn.btn-signin:active,
            .btn.btn-signin:focus {
              background-color: rgb(12, 97, 33);
            }

            .forgot-password {
              color: rgb(104, 145, 162);
            }

            .forgot-password:hover,
            .forgot-password:active,
            .forgot-password:focus {
              color: rgb(12, 97, 33);
            }
            .term-service {
              color: #555;
            }

            .loginhere {
              color: #555;
              font-weight: 500;
              text-align: center;
            }

            .loginhere-link {
              font-weight: 700;
              color: #222;
            }
            .loginhere-link:hover {
              color: #222;
            }
          `}</style>
        </head>
        <body>
          <TradingWidgetView />
          <TopBar />
          <Header />
          <div className="container mx-auto" style={{ width: "auto" }}>
            {props.children}
          </div>
          <Footer />

          {/* <!-- JS --> */}

          <script src="/assets/js/jquery.js"></script>

          <script src="/assets/vendor/bootstrap/js/bootstrap.js"></script>
          <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
          <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="/assets/vendor/php-email-form/validate.js"></script>
          <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="/client.js"></script>
          <script src="/register-service-worker.js"></script>
        </body>
        {/* <!-- This templates was made by Colorlib (https://colorlib.com) --> */}
      </html>
    </div>
  );
}
