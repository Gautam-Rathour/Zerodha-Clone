

import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-4 mt-5 " id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="">Track Tickets</a>
            </div>
            
            <div className="row p-4 m-5">
                <div className="col-6 p-4">
                    <h1 className="fs-4 mb-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input className="mb-3" placeholder="Eg. how do I activate F&O" />
                    <br/>
                    <a className="me-3" href="">Track account opening</a>
                    <a className="me-3" href="">Track segment activation</a>
                    <a className="me-3" href="">Intraday margins</a>
                    <a className="me-3" href="">Kite user manual</a>
                </div>

                <div className="col-6 p-4">
                    <h1 className="fs-4 mb-3">Featured</h1>
                    <ol>
                        <li className="mb-2" ><a href="">Current Takeovers and Delisting - January 2027</a></li>
                        <li className="mb-2" ><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>  
                </div>
            </div>
        </section>
    );
}


export default Hero;

