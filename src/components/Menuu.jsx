import React, { useState } from 'react';
import './PetSignup.css';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';

const Menuu = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={PersonTwoToneIcon} alt="" />
                        <input type="text" placeholder="Name" />
                    </div>
                )}
                <div className="input">
                    <img src={EmailTwoToneIcon} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={LockOpenTwoToneIcon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Login" && (
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            )}
            <div className="submit-container">
                <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit grey" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
}

export default Menuu;
