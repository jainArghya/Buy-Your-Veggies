import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "../components/Header";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { publicReq } from "../requestAPI";

function createCard(product){
    return (
        <ProductsCard key={product._id} id={product._id} img={product.img} title={product.title} price={product.price} />
    )
}

function Products(){
    const location = useLocation();
    const id = (location.pathname.split('/')[2]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicReq.get('/products/');
                console.log(res);
                setProducts(res.data);
            } catch(err){
                console.log(err.response.data);
            }
        };
        getProduct();
    }, []);
    
    return (
        <div>
            <Header />
            <div className="products-container">
            {products.map(createCard)}
            </div>
            <Footer />
        </div>
    );
}

export default Products;
