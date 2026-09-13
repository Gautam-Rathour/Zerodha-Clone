import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5" style={{ marginLeft: "80px" }}>
      <div className="row p-5 align-items-center">
        <div className="col-5 pe-5 mt-5">
          <img src={imageURL} alt="Product name" style={{ width: "100%", maxWidth: "500px "}} />
        </div>
        <div className="col-6 ps-5 mt-5 mb-5 ">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <div style={{textDecoration: "none"}}>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class=" fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More <i class=" fa fa-long-arrow-right" aria-hidden="true"></i> </a>
          </div>

          <div className="mt-5">
            <a href={googlePlay}>
                <img src="/media/image/google-play-badge.svg" />
            </a>
            <a href={appStore}>
                <img src="/media/image/appstore-badge.svg"  style={{ marginLeft: "50px"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
