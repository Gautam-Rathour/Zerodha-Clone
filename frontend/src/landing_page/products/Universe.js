import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend you trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/image/zerodhafundhouse.png" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted">
            Our asset management 
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/sensibull-logo.svg" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted">
            Options trading platform

          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/tijori.svg" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted">
            Investment research platform
          </p>
        </div>
      </div>


      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img src="media/image/streak-logo.png" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted">
            Systematic trading platform 
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/smallcase-logo.png" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted">
            Thematic investing platform

          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/ditto-logo.png" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted">
            Personalized advice on life
          </p>
        </div>
        
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
