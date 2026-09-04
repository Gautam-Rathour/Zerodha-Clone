

import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/image/largestBroker.svg" alt="LargestBroker" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1> Free and open market education </h1>
                    <p className="mb-5"> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p> Futures and Options </p>
                                </li>
                                <li>
                                    <p> Commodity derivatives </p>
                                </li>
                                <li>
                                    <p> Currency derivatives </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p> Stocks & IPOs </p>
                                </li>
                                <li>
                                    <p> Direct mutual funds </p>
                                </li>
                                <li>
                                    <p> Bonds and Govt. Securities </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}


export default Awards;

