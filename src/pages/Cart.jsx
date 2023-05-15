import React, { useContext, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";
import { userReq } from "../requestAPI";
import { User } from "../Context/Context";
import StripeCheckout from "react-stripe-checkout";

function Cart(){
    
    const id = "645dffd2d107dd4e2f1bf7d4"
    const {cartitems, setCartitems, user} = useContext(User);

    useEffect(() => {
        const getCart = async () =>{
            try{
                const res = await userReq.get("/carts/find/" + id)
                console.log(res);
                setCartitems(res.data.products);
            } catch(err){
                console.log(err.response.data);
            }
        }
        getCart();
    }, [id]);


    let total = 0;

    function createCartCard(item){
        return(
            <CartCard key={item.productId} id={item.productId} img={item.img} title={item.productTitle} pack={item.quantity} price={item.price} />
        );
    }

    function totalPrice(i){
        total = total + i.price*i.quantity;
    }
    
    cartitems.map(totalPrice);

    const stripe = () => {
        return(
        user.loggedIn ?
        <StripeCheckout 
        name="BuyYourVeggies" 
        billingAddress 
        shippingAddress 
        amount={total + 80}
        token={onToken}
        stripeKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3">
                <button type="button" href="#" className="btn btn-primary">Buy</button>
        </StripeCheckout> : <Link to="/login" style={{textDecoration: "none"}}><button type="button" href="#" className="btn btn-primary">Buy</button></Link>)
    }
    
    const onToken = (token) => {
        console.log(token);
        const orderData = async () => {
            try{
                const res = await userReq.post('/orders/',{
                    userId: user.id,
                    products: cartitems,
                    amount: total+80,
                    address:token.card.address_city
                });
                console.log(res.data);
            } catch(err){
                console.log(err.response.data);
            }
        }
        orderData();
    }

    return (
        <div className="cart-page">
            <Header />
            <h3 style={{fontFamily: "satisfy"}}>Your Cart</h3>
            <Link to="/products" style={{textDecoration: "none"}}>
                <h5 className="continue-shopping">Continue Shopping</h5>
            </Link>
            <div className="my-cart">
                <div className="cart-container">
                    {cartitems.map(createCartCard)}
                </div>
                <div className="order-summary">
                    <h3 style={{backgroundColor: "rgb(255, 245, 136)"}}>Order Summary</h3>
                    <p><strong>Sub-Totals:</strong> Rs.{total}</p>
                    <p><strong>Delivery Cost:</strong> Rs.80</p>
                    <p><strong>Delivery Discount:</strong> Rs.0</p>
                    <p><strong>Number Of Products:</strong> {cartitems.length}</p>
                    <p><strong>Delivery:</strong> By Tomorrow</p>
                    <p><strong>Total:</strong> Rs.{total + 80}</p>
                    {stripe()}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;
