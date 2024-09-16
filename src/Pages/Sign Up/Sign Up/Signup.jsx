import React from 'react';
import './Signup.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from './BlackLogo.png';
import { Link } from 'react-router-dom';



const Signup = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <img src={logo} alt="Logo"/>
                <h1>Create Account</h1>
                <div className="input-box">
                    <input type="text" placeholder='Company Name' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="register-link">
                    <p> Already have an account? <Link to="/Login">Login</Link></p>
                </div>
                <button type="submit">Create</button>
            </form>
            </div>
    );
};

export default Signup;