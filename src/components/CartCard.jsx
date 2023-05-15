import React, { useContext } from "react";
import { User } from "../Context/Context";

function CartCard(item){
    const {cartitems, setCartitems} = useContext(User)

    const handleClick = (e) => {
        const newCart = cartitems.filter((k)=>(k.productId !== item.id))
        setCartitems(newCart);
        e.preventDefault();
    }
    
    return (
        <div className="cart-card">
            <img src={item.img} />
            <div className="cart-card-body">
                <p><span style={{color:"green"}}>&#8865;</span>Fresh</p>
                <p><strong>Product-Id:</strong> {item.id}</p>
                <p><strong>Product:</strong> {item.title}</p>
                <p><strong>Pack-size:</strong> {item.pack}kg</p>
                <p><strong>Price:</strong> Rs.{item.price}</p>
                <button type="button"  onClick={handleClick} href="#" className="btn btn-primary">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartCard;
