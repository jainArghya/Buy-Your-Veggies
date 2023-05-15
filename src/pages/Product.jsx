import React, { useContext, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { publicReq, userReq } from "../requestAPI";
import { User } from "../Context/Context";

function Product(){
    const location = useLocation();
    const id = (location.pathname.split('/')[2]);
    const [product, setProduct] = useState({});
    const [pack, setPack] = useState(1);

    const {cartitems, setCartitems} = useContext(User);

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicReq.get('/products/find/' + id);
                console.log(res);
                setProduct(res.data);
            } catch(err){
                console.log(err.response.data);
            }
        };
        getProduct();
    }, [id]);

    const handleClick = (e)=>{
        const newCart = [...cartitems, {
            productId:product._id,
            productTitle: product.title,
            quantity:pack,
            desc:product.desc,
            price: product.price,
            img: product.img
        }];
        setCartitems(newCart);
        const postCart = async () => {
            try{
                const postData = await userReq.put("/carts/645dffd2d107dd4e2f1bf7d4", {
                    userId: "645dffd2d107dd4e2f1bf7d4",
                    products: cartitems
                });
                console.log(postData.data);           
            } catch(err){
                console.log(err.response.data);
            }
        }
        postCart();
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className="single-product">
                <div className="product-image">
                    <img src={product.img} />
                </div>
                <div className="product-desc">
                    <h5>{product.title}</h5>
                    <p><span style={{color:"green"}}>&#8865;</span>Fresh</p>
                    <p style={{fontFamily: "satisfy", fontSize: "25px"}}>{product.desc}</p>
                    <p>1 kg - Rs.{product.price}</p>
                    <h6>Pack Sizes</h6>
                    <form className="pack-sizes"> 
                        <input type="radio" id="pack1" name="pack1" value="1kg" checked onChange={()=>setPack(1)}/>
                        <label htmlFor="pack1"><span>1 kg - MRP. Rs.{product.price}</span></label>
                        <input type="radio" id="pack2" name="pack1" value="2kg" onChange={()=>setPack(2)}/>
                        <label htmlFor="pack2"><span>2 kg - MRP. Rs.{product.price*2}</span></label>
                        <input type="radio" id="pack3" name="pack1" value="5kg" onChange={()=>setPack(5)}/>
                        <label htmlFor="pack3"><span>5 kg - MRP. Rs.{product.price*5}</span></label>
                        <button onClick={handleClick} type="submit" href="#" className="btn btn-primary">Add to Cart</button>
                    </form>
                </div>
            </div>
        <Footer />
        </div>
    );
}

export default Product;
