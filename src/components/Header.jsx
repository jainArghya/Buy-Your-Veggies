import React, { useContext, useState } from "react";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { User } from "../Context/Context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    const { cartitems, setCartitems, user, setUser } = useContext(User);

    const handleLogout = () => {
        setCartitems([]);
        setUser({loggedIn: false, id:``, username:``, email:``});
    }

    const Dropdown = () => {
        return (
        <div class="dropdown">
            <button class="btn btn-info profile-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <AccountCircleIcon/>  {user.username}
            </button>
            <ul class="dropdown-menu">
                <Link to="/profile" style={{textDecoration: "none"}}><li><a class="dropdown-item" href="#">Profile Info<ion-icon name="person-outline" style={{marginLeft: "31px"}}></ion-icon></a></li></Link>
                <Link to="/login" style={{textDecoration: "none"}}><li><a onClick={handleLogout} class="dropdown-item" href="#">Logout<ion-icon name="exit-outline" style={{marginLeft: "60px"}}></ion-icon></a></li></Link>
            </ul>
        </div>
        )
    }

    const Profile = () => {
        return (
            user.loggedIn ? 
            (<Dropdown />) : (
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <li className="nav-item pe-2">
                    <Link to="/signup">
                        <button className="btn btn-dark nav-btn">Sign Up</button>
                    </Link>
                </li>
                <li className="nav-item pe-1">
                    <Link to="/login">
                        <button className="btn btn-light nav-btn">Login</button>
                    </Link>
                </li>
            </div>))
    }
    
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-success">
                <div className="container-fluid">
                    <Link to="/" style={{textDecoration: "none", fontFamily:"satisfy", fontSize:"23px"}}>
                        <a className="navbar-brand">BuyYourVeggies</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: "400px"}}/>
                            </form>
                            <Profile />
                        </ul>
                        <Badge badgeContent={cartitems.length} color="primary">
                            <Link to="/cart">
                                <ShoppingCartOutlinedIcon fontSize= "large"/>
                            </Link>
                        </Badge>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
