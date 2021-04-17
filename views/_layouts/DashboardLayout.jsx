import React from "react";
import Navbar from "../components/admin/Navbar.jsx";
import Footer from "../components/admin/Footer.jsx";
import Sidebar from "../components/admin/Sidebar.jsx";

export default function DashboardLayout(props) {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="/assets/css/tailwind.css" />
          <title>Dashboard</title>
        </head>
        <body>
          <div className="leading-normal tracking-normal" id="main-body">
            <div className="flex flex-wrap">
              <Sidebar {...props} />

              <div
                className="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen overlay"
                id="main-content"
              >
                <Navbar />

                <div className="p-3 lg:p-5 bg-gray-100 mb-20">
                  {/* <router-view /> */}
                  {props.children}
                </div>

                {/* <Footer /> */}
              </div>
            </div>
          </div>
          <script src="/assets/js/jquery.js"></script>
          <script src="/register-service-worker.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              $("#nav-click").on("click", () => {
                $("#main-nav")[0].classList.toggle("hidden")
              })
              $("#alert-close").on("click", () => {
                $("#alert")[0].classList.toggle("hidden")
              })
            `,
            }}
          ></script>
          <style jsx>{`
            @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");
            body {
              font-family: Poppins, sans-serif;
              overflow-x: hidden;
            }

            *::-webkit-scrollbar {
              display: none;
              width: 0;
            }

            .overlay {
              position: relative;
            }

            /* 1024 -1 so it doesnt show when it hits 1024px */
            @media only screen and (max-width: 1023px) {
              .overlay::after {
                content: " ";
                z-index: 29;
                display: block;
                height: 100%;
                top: 80px;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
                pointer-events: none;
                position: fixed;
              }
            }
          `}</style>
        </body>
      </html>
    </div>
  );
}
