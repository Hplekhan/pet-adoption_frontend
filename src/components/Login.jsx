import React from 'react';
import './Login.css';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const Login = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <>
            <NavBar />
            <div className='container-center'>
                <div className='container-1'>
                    <div className="header">
                        <div className="text">{action}</div>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">
                        {action === "Login" ? <div></div> : <div className="input">
                            <img src={Person2TwoToneIcon} alt="" />
                            <input type="text" placeholder="name" />
                        </div>}

                        <div className="input">
                            <img src={EmailTwoToneIcon} alt="" />
                            <input type="email" placeholder="Email Id" />
                        </div>

                        <div className="input">
                            <img src={LockOpenTwoToneIcon} alt="" />
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>

                    {action === "sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

                    <div className="submit-container">
                        <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                        <div className={action === "Sign Up" ? "submit grey" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
