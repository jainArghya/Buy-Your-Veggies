import React, { useContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import { publicReq } from "../requestAPI";
import { User } from "../Context/Context";
import { Link } from "react-router-dom";

function Login(){
    const [err, setErr] = useState(false);
    const [values, setValues] = useState({
        username: "",
        password: ""
    })

    const { setUser } = useContext(User);

    const handleChange = (e) => {
        setValues((prev) => ({...prev, [e.target.name]: [e.target.value]}))
        console.log(values);
    }

    const handleSubmit = (e) => {
        const loginData = async () => {
            try{
                const res = await publicReq.post('/auth/login',{
                    username: values.username[0],
                    password: values.password[0]
                });
                console.log(res.data);
                setUser({loggedIn: true, id:`${res.data._id}`, username:`${res.data.username}`, email:`${res.data.email}`});
            } catch(err){
                console.log(err.response.data);
                setErr(true);
            }
        }
        loginData();
        e.preventDefault();
    }

    return (
        <div className="login-page">
            <div className="login-box">
            <form className="login-form">
                <h3>Login</h3>
                <div className="input-field">
                    <ion-icon name="person"></ion-icon>
                    <input type="text" name="username" placeholder=" " onChange={handleChange} />
                    <label for="">Username</label>
                </div>
                <div className="input-field">
                <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" placeholder=" " onChange={handleChange} />
                    <label for="">Password</label>
                </div>
                {err && <p style={{color: "red"}}>Invalid Credentials</p>}
                <button type="submit" className="btn btn-light login-btn" onClick={handleSubmit} >Login</button>
                <div className="auth-link">
                    <p>Don't have an account? <Link to="/signup"><a>Sign-Up</a></Link></p>
                </div>
            </form>
            </div>
            
        </div>
    );
}

export default Login;
