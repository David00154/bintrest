import React from "react";
import Default from "./_layouts/DefaultLayout.jsx";

import TopBar from "./components/base/TopBar.jsx";
import Header from "./components/base/Header.jsx";
import Hero from "./components/base/Hero.jsx";
import Services from "./components/base/Services.jsx";
import AboutSection from "./components/base/AboutSection.jsx";
import Clients from "./components/base/Clients.jsx";
import TradingWidgetView from "./components/base/TradingWidgetView.jsx";
import Testimonies from "./components/base/Testimonies.jsx";
import Pricing from "./components/base/Pricing.jsx";
import Contact from "./components/base/Contact.jsx";
import Footer from "./components/base/Footer.jsx";
import Cta from "./components/base/Cta.jsx";
import Standard from "./components/base/Standard.jsx";

export default function Home(props) {
  return (
    <>
      <Default
        title={
          "BINTREST CRYPTO TRADE | We are reliable, simple and innovative" ||
          props.title
        }
      >
        <TradingWidgetView />
        <TopBar />
        <Header />
        <Hero />
        <Services />
        {/* <!-- ======= Cta Section ======= --> */}

        <Cta url={"assets/img/crypto-background.jpg"}>
          <AboutSection />
          <Pricing />
        </Cta>
        {/* <!-- End Cta Section --> */}
        <Clients />

        <Standard />

        {/* <!-- End Why Us Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <Cta url={"assets/img/crypto-img.jpg"}>
          <Testimonies />
        </Cta>
        {/* <!-- End Cta Section --> */}
        <Contact />
        <Footer />
      </Default>
    </>
  );
}
