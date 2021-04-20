import React from "react";

export default function Testimonies(props) {
  return (
    <>
      {/* <!-- ======= Testimonies Section ======= --> */}
      <div className="gtco-testimonials">
        <h1 className="text-white text-center display-4">Testimonies</h1>
        <div className="owl-carousel owl-carousel1 owl-theme">
          <div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                alt=""
              />
              <div className="card-body">
                <h5>
                  Ronne Galle <br />
                  {/* <span> Project Manager </span> */}
                </h5>
                <p className="card-text">
                  “ Within one week of joining bintrest-trade, I profited enough
                  to pay two years worth of membership fees ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
                alt=""
              />
              <div className="card-body">
                <h5>
                  Missy Limana
                  <br />
                  {/* <span> Engineer </span> */}
                </h5>
                <p className="card-text">
                  “ Great platform. Have doubled my account since joining. 12k
                  to 24k. And now I plan on scaling and turning this into 100k
                  in the next 2months. Excited to see where bintrest-trade takes
                  us next. ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302"
                alt=""
              />
              <div className="card-body">
                <h5>
                  Martha Brown
                  <br />
                  {/* <span> Project Manager </span> */}
                </h5>
                <p className="card-text">
                  “ I invested in crypto because I was following what
                  bintrest-trade was saying and I was about to pull out all my
                  money but i felt confident keep staying in because i have a
                  proffessional guiding me so I made $50, 00in two months thanks
                  to bintrest-trade I really needed that ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
                alt=""
              />
              <div className="card-body">
                <h5>
                  Hanna Lisem
                  <br />
                </h5>
                <p className="card-text">
                  “ My mind in blown away from the value in this trade group.
                  It's helped me make way less risky decisions thay by myself I
                  would have been making. Highly recomended joining if you
                  wanted to lower your risk if you are investing in crypto. ”{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        // body { background: aliceblue; }

        .gtco-testimonials {
          position: relative;
          margin-top: 30px;
        }
        @media (max-width: 767px) {
          .gtco-testimonials {
            margin-top: 20px;
          }
        }
        .gtco-testimonials h2 {
          font-size: 30px;
          text-align: center;
          color: #333333;
          margin-bottom: 50px;
        }
        .gtco-testimonials .owl-stage-outer {
          padding: 30px 0;
        }
        .gtco-testimonials .owl-nav {
          display: none;
        }
        .gtco-testimonials .owl-dots {
          text-align: center;
        }
        .gtco-testimonials .owl-dots span {
          position: relative;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          display: block;
          background: #fff;
          border: 2px solid #01b0f8;
          margin: 0 5px;
        }
        .gtco-testimonials .owl-dots .active {
          box-shadow: none;
        }
        .gtco-testimonials .owl-dots .active span {
          background: #01b0f8;
          box-shadow: none;
          height: 12px;
          width: 12px;
          margin-bottom: -1px;
        }
        .gtco-testimonials .card {
          background: #fff;
          box-shadow: 0 8px 30px -7px #c9dff0;
          margin: 0 20px;
          padding: 0 10px;
          border-radius: 20px;
          border: 0;
        }
        .gtco-testimonials .card .card-img-top {
          max-width: 100px;
          border-radius: 50%;
          margin: 15px auto 0;
          box-shadow: 0 8px 20px -4px #95abbb;
          width: 100px;
          height: 100px;
        }
        .gtco-testimonials .card h5 {
          color: #01b0f8;
          font-size: 21px;
          line-height: 1.3;
        }
        .gtco-testimonials .card h5 span {
          font-size: 18px;
          color: #666666;
        }
        .gtco-testimonials .card p {
          font-size: 18px;
          color: #555;
          padding-bottom: 15px;
        }
        .gtco-testimonials .active {
          opacity: 0.5;
          transition: all 0.3s;
        }
        .gtco-testimonials .center {
          opacity: 1;
        }
        .gtco-testimonials .center h5 {
          font-size: 24px;
        }
        .gtco-testimonials .center h5 span {
          font-size: 20px;
        }
        .gtco-testimonials .center .card-img-top {
          max-width: 100%;
          height: 120px;
          width: 120px;
        }
        .owl-carousel .owl-nav button.owl-next,
        .owl-carousel .owl-nav button.owl-prev,
        .owl-carousel button.owl-dot {
          outline: 0;
        }
      `}</style>
      {/* <!-- Testimonies Section --> */}
    </>
  );
}
