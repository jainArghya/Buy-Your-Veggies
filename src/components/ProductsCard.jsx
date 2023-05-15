import React from "react";
import { Link } from "react-router-dom";

function ProductsCard(props){
    return(
    <div className="card">
        <Link style={{textDecoration:"none"}} to={`/product/${props.id}`}>
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <p><span style={{color:"green"}}>&#8865;</span>Fresh</p>
                    <h5 value={props.title} className="card-title">{props.title}</h5>
                <p>1 kg - Rs.{props.price}</p>
            </div>
        </Link>
    </div>
    );
}

export default ProductsCard;
