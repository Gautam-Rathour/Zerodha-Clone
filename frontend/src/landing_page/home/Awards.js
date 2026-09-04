

// import React from "react";


// function Awards() {
//     return (
//         <div >
//             Awards
//         </div>
//     )
// }

// export default Awards;

import React from "react";

function Awards() {
  return (
    <div
      className="container-fluid mt-5"
      style={{ backgroundColor: "#f5f9ff" }}
    >
      <div className="container">
        <div
          className="row align-items-center"
          style={{ padding: "20px 40px" }}>

          {/* Left - Logo */}
          <div className="col-lg-3 d-flex align-items-center ">
            <img
              src="/media/image/kc-logo-landing.svg"
              alt="Kite Connect"
              style={{ width: "280px", marginRight: "70px" }}
            />
          </div>

          {/* Middle - Description */}
          <div className="col-lg-6">
            <p className="text-muted mb-0" style={{ fontSize: "15px" }}>
              Need more? Build your own trading and investing experience with
              Kite Connect, simple HTTP APIs to place orders, stream market
              data, manage your account, and more.
              <a
                href="#"
                className="text-decoration-none ms-1"
              >
                Explore →
              </a>
            </p>
          </div>

          {/* Right - Image */}
          <div className="col-lg-3 text-center">
            <img
              src="/media/image/kc-banner-image.svg"
              alt="Kite Connect"
              style={{ width: "200px",  marginLeft: "70px" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;
