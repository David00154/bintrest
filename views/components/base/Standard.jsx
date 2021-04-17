import React from "react";

export default function Standard() {
  return (
    <div>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="box">
                <span>01</span>
                <h4>Advanced Reporting</h4>
                <p>
                  Detailed reporting daily, weekly and monthly. We give you
                  infographic reports.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="box">
                <span>02</span>
                <h4>Legal Compliance</h4>
                <p>
                  We abide by financial regulations of the industry, be rest
                  assured you are safe and money secured.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="box">
                <span>03</span>
                <h4>World Coverage</h4>
                <p>
                  Cryptocurrency is a general language and so is our coverage,
                  worldwide, we speak your language
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
