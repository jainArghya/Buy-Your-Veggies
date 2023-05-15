import React, { useContext, useState } from "react";
import Header from "../components/Header";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import { User } from "../Context/Context";
import Footer from "../components/Footer";
import { userReq } from "../requestAPI";

function Profile() {
    const [edit, setEdit] = useState(false);
    const [newpass, setNewpass] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [err, setErr] = useState(false);

    const { user } = useContext(User);

    const handlePassword = (e) => {
        setNewpass(e.target.value);
    }

    const handleConfirmpass = (e) => {
        setConfirmpass(e.target.value);
    }

    const handleSubmit = (e) => {
        const id = user.id;
        if(newpass === confirmpass){
            setErr(false);
            const registerData = async () => {
                try{
                    const res = await userReq.put('/users/' + id,{
                        username: user.username,
                        email: user.email,
                        password: newpass
                    });
                    console.log(res);
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

    

    const handleEdit = (e) => {
        setEdit(!edit);
        e.preventDefault();
    }

    const changePassword = () => {
        return (edit && 
        <form>
            <div className="update-password">
            <p><b>New Password</b></p>
            <input type="password" className="update-input" name="new-password" placeholder="New Password" onChange={handlePassword} />
            </div>
            <div className="update-password">
            <p><b>Confirm Password</b></p>
            <input type="password" className="update-input" name="confirm-password" placeholder="Confirm Password" onChange={handleConfirmpass} />
            </div>
            {err && <p style={{color: "red", textDecoration: "underline"}}>RETRY</p>}
            <button type="submit" className="btn btn-primary signup-btn" onClick={handleSubmit}>Update Password</button>
        </form> )
    }

    return (
        <div className="profile-page">
            <Header />
            <div className="profile-container">
                <div className="profile-data">
                    <AccountCircleIcon sx={{ fontSize: 150, margin: "auto"}} />
                    <p style={{margin: "auto", fontSize: "20px"}}>Arghya</p>
                    <p><b>Username</b></p>
                    <p>{user.username}</p>
                    <p><b>Email</b></p>
                    <p>{user.email}</p>
                    <button onClick={handleEdit} style={{border: "none", width: "400px", margin: "5px 0"}}>Change Password {edit ? <EditOffIcon /> : <EditIcon />}</button> 
                    {changePassword()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;
