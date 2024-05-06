import React, { useState } from 'react';
import './PetLogin.css'
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
const PetLogin = () => {
    const [action, setAction] = useState("Login");
    return (
        <div className='container-login'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null :
                    <div className="input">
                        <img src={Person2TwoToneIcon} alt="" />
                        <input type="text" placeholder="Name" /></div>}
                <div className="input">
                    <img src={EmailTwoToneIcon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={LockOpenTwoToneIcon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Login" ?
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>: null}
            <div className="submit-container">
                <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("Register") }}>Register</div>
                <div className={action === "Register" ? "submit grey" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
};
export default PetLogin;
