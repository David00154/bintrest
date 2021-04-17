import React from "react";

export default function DefaultLayout(props) {
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
          <title>{props.title}</title>
          <meta content="" name="description" />
          <meta content="" name="keywords" />

          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />

          {/* <!-- Vendor CSS Files --> */}
          <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
          <link
            href="/assets/vendor/bootstrap/css/bootstrap.min.css"
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
          <link href="/assets/css/client.css" rel="stylesheet" />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4//assets/owl.carousel.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4//assets/owl.theme.default.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          {props.children}
          <a
            href="#"
            class="back-to-top d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-arrow-up-short"></i>
          </a>
          <div id="preloader"></div>

          {/* <!-- Vendor JS Files --> */}
          <script src="/assets/js/jquery.js"></script>
          <script src="/assets/vendor/aos/aos.js"></script>
          <script src="/assets/vendor/bootstrap/js/bootstrap.js"></script>
          <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
          <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="/assets/vendor/php-email-form/validate.js"></script>
          <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

          {/* <!-- Template Main JS File --> */}
          {/* <script src="/assets/js/jquery.js"></script> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          <script src="/assets/js/main.js"></script>
          <script src="/client.js"></script>
          <script src="/assets/js/animations.js"></script>
          <script src="/register-service-worker.js"></script>
        </body>
      </html>
    </div>
  );
}
