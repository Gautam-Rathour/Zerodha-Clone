import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row align-items-center ps-5">

        {/* Left */}
        <div className="col-lg-5">
          <h1 className="fs-3 mb-4">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-decoration-none">
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Right */}
        <div className="col-lg-7">
          <div className="row align-items-center">

            <div className="col-md-4 d-flex align-items-center">
              <img
                src="/media/image/pricing-eq.svg"
                alt="Free account"
                style={{ width: "75px" }}
              />
              <p className="mb-0 ms-2">
                Free account
                <br />
                opening
              </p>
            </div>

            <div className="col-md-4 d-flex align-items-center">
              <img
                src="/media/image/pricing-eq.svg"
                alt="Free equity delivery"
                style={{ width: "75px" }}
              />
              <p className="mb-0 ms-2">
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>

            <div className="col-md-4 d-flex align-items-center">
              <img
                src="/media/image/other-trades.svg"
                alt="Intraday and F&O"
                style={{ width: "85px" }}
              />
              <p className="mb-0 ms-2">
                Intraday and
                <br />
                F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;