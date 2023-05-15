import React, { useContext, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { publicReq } from "../requestAPI";
import {  User } from "../Context/Context";
import { Link } from "react-router-dom";

function Signup(){
    const [err, setErr] = useState(false)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");

    const { setUser } = useContext(User);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmpass = (e) => {
        setConfirmpass(e.target.value);
    }

    const handleSubmit = (e) => {
        if(password === confirmpass){
            setErr(false);
            const registerData = async () => {
                try{
                    const res = await publicReq.post('/auth/register',{
                        username: username,
                        email: email,
                        password: password
                    });
                    console.log(res.data);
                    setUser({loggedIn: true, id:`${res.data._id}`, username:`${res.data.username}`, email:`${res.data.email}`});
                } catch(err){
                    console.log(err.response.data);
                }
            }
            registerData();
        } else{
            setErr(true);
        }
        e.preventDefault();
    }

    return (
        <div className="signup-page">
            <div className="signup-box">
                <form className="signup-form">
                    <h3>Sign-Up</h3>
                    <div className="input-field">
                        <ion-icon name="person"></ion-icon>
                        <input type="text" name="username" placeholder=" " onChange={handleUsername} />
                        <label for="">Username</label>
                    </div>
                    <div className="input-field">
                        <ion-icon name="mail"></ion-icon>
                        <input type="email" name="email" placeholder=" " onChange={handleEmail} />
                        <label for="">Email</label>
                    </div>
                    <div className="input-field">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="password" placeholder=" " onChange={handlePassword} />
                        <label for="">Password</label>
                    </div>
                    <div className="input-field">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="confirm_password" placeholder=" " onChange={handleConfirmpass} />
                        <label for="">Confirm Password</label>
                    </div>
                    {err && <p style={{color: "red"}}>Wrong Credentials.</p>}
                    <button type="submit" className="btn btn-light signup-btn" onClick={handleSubmit}>Sign Up</button>
                    <div className="auth-link">
                        <p>Already have an account? <Link to="/login"><a>Sign-In</a></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
