import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/image/kite3-dashboard.png"
        productName="Kite by Zerodha"
        productDesription="Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <Universe />
    </>
  );
}

export default PricingPage;
