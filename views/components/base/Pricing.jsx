import React from "react";

export default function Pricing() {
  return (
    // <!-- ======= Pricing Section ======= -->
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          {/* <span>Pricing</span> */}
          <h1 className="display-5 text-white">Pricing</h1>
          {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="box">
              <h3>KILO</h3>
              <h4>
                <sup>$</sup>200
                {/* <span> / month</span> */}
              </h4>
              <ul>
                <li>BITCOIN MINIG / TRADING</li>
                <li>BONUS 5%</li>
                {/* <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li className="na">Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li> */}
              </ul>
              <div className="btn-wrap">
                <a href="/dashboard/deposit" className="btn-buy">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in">
            <div className="box featured">
              <h3>MEGA</h3>
              <h4>
                <sup>$</sup>500
                {/* <span> / month</span> */}
              </h4>
              <ul>
                <li>BITCOIN MINING / TRADING </li>
                <li>BONUS 10%</li>
                {/* <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li> */}
              </ul>
              <div className="btn-wrap">
                <a href="/dashboard/deposit" className="btn-buy">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="box">
              <h3>GIGA</h3>
              <h4>
                <sup>$</sup>1,000
                {/* <span> / month</span> */}
              </h4>
              <ul>
                <li>BITCOIN MINING / TRADING</li>
                <li>BONUS 15%</li>
                {/* <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li> */}
              </ul>
              <div className="btn-wrap">
                <a href="/dashboard/deposit" className="btn-buy">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Pricing Section -->
  );
}
