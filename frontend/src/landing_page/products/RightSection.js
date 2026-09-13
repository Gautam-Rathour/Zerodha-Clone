import React from "react";

function RightSection({
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
        
        <div className="col-6 ps-5 mt-5 mb-5 ">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
        </div>

        <div className="col-5 pe-5 mt-5">
          <img src={imageURL} alt="Product name" style={{ width: "100%", maxWidth: "500px "}} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;

