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
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-5 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div style={{textDecoration: "none"}}>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More</a>
          </div>

          <div className="mt-5">
            <a href={googlePlay}>
                <img src="/media/image/google-play-badge.svg" />
            </a>
            <a href={appStore}>
                <img src="/media/image/appstore-badge.svg"  style={{ marginLeft: "50px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
