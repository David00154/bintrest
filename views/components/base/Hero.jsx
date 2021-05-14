import React, { useState } from "react";

export default function Hero(params) {
  // let topTexts = [];
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1 className="typing">
            JOIN THOUSANDS WHO HAVE STARTED TRADING WITH BINTREST CRYPTO TRADE
          </h1>
          <h2 className="">We are reliable, simple and innovative</h2>
          <a href="/dashboard" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
}
