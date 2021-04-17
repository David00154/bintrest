import React from 'react';

export default function AboutSection(props) {
    return (
        <>
           {/* <!-- ======= About Section ======= --> */}
            <section id="about" style={{
                background: '#e8e8e8'
            }} className="about">
                <div className="container">

                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                    <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                    <h1>ABOUT US.</h1>
                    <p className="fst-italic">
                        Bintrest is a trading company focused on customer satisfaction both online and offline to ensure you make trades with the least margin for error.
                    </p>
                    <ul>
                        <li><i className="bi bi-check-circle"></i>you can exchange your bitcoin by eth.</li>
                        <li><i className="bi bi-check-circle"></i> best profite bitco.exge for all over the world.</li>
                        <li><i className="bi bi-check-circle"></i>we take a big missoin for growth business.</li>
                    </ul>
                    {/* <!-- <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                    </p> --> */}
                    </div>
                </div>

                </div>
            </section>
            {/* <!-- End About Section --> */}
        </>
    )
}