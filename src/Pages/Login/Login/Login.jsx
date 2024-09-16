import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from './BlackLogo.png';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Header';


const Login = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <img src={logo} alt="Logo"/>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Email' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p> Don't have an account? <Link to="/Signup">Register</Link></p>
                </div>
            </form>
            </div>
    );
};

export default Login;