import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

function Home(){
    return (
        <div>
            <Header />
            <Intro />
            <Footer />
        </div>
    );
}

export default Home;
