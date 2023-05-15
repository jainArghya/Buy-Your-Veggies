import React from "react";
import { Link } from "react-router-dom";

function Intro(){
    return (
            <div>
            <div className="grid">
                <div className="col-lg-6">
                    <div>
                        <h1>Your go to place for buying grocery.</h1>
                        <p>We help you buy fresh groceries from home. Sit and Relax while we deliver your groceries.</p>
                    </div>
                    <Link to="/products">
                        <button className="btn btn-lg btn-success btn-outline-light intro-button">See Products</button>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <img className="img" src="grocery.jpg" alt="BuyYourVeggies.com"/>
                </div>
            </div>    
            </div>
    );
}

export default Intro;
