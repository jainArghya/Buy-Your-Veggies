import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer(){
    return (
        <footer>
        <div className="social-links">
            <FacebookOutlinedIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <MailOutlineIcon fontSize="large" />
        </div>
        <p>© Copyright Ārghya</p>
        </footer>
    );
}

export default Footer;
