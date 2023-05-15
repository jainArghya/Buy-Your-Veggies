import React, { useContext } from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import { User } from "./Context/Context";
import Profile from "./pages/Profile";

function App(){
    const {user} = useContext(User);
    
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={user.loggedIn ? <Navigate to="/"/> : <Signup />} />
                <Route path="/login" element={user.loggedIn ? <Navigate to="/" /> : <Login />} />
                <Route path="/products" element={<Products />} />
                <Route path={`/product/:id`} element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
    )
}

export default App;
