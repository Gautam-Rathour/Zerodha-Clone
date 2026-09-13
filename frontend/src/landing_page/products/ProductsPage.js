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
        imageURL="/media/image/kite3-dashboard.png"
        productName="Kite by Zerodha"
        productDesription="Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="/media/image/img3.png"
        productName="Sleek User Interface"
        productDesription="With a sleek and carefully designed UI, buying, selling, analysing, and managing your portfolio, everything's just a click away. Navigate the app seamlessly with intuitively designed keyboard shortcuts."
      />

      <LeftSection
        imageURL="/media/image/img2.png"
        productName="Universal instrument search"
        productDesription="Search across 90,000+ stocks and F&O contracts across multiple exchanges instantly. Find your favorite stocks, bonds, metals, or derivatives, anything really, with absolutely zero latency."
      />

      <RightSection
        imageURL="/media/image/img6.png"
        productName="Advanced charting"
        productDesription="Hundreds of indicators, studies, and tools on a powerful and customisable charting interface. Extensive historical data for stocks and F&O contracts. Nobody else offers as much data as we do."
      />

      <LeftSection
        imageURL="/media/image/img4.png"
        productName="
20 market depth or level 3 data"
        productDesription="Exclusive access to level 3 data, or 20 marketdepth. Level 3 data gives you deeper insights into market liquidity and allows you to develop sophisticated intraday trading strategies."
      />

      <Universe />
    </>
  );
}

export default PricingPage;
