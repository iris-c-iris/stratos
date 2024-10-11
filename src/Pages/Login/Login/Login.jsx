import React from 'react';
import { auth } from "../../../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from './BlackLogo.png';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Header';


const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleLoginClick = async (event) => { 
        event.preventDefault();

     //const signIn = async () => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            const user = userCredential.user;
            console.log("User logged in:", user);
        } catch (error) {
            console.log("Error loggin in:", error.message);
        }  
    };

    return(
        <div className='wrapper'>
            <form action="">
                <img src={logo} alt="Logo"/>
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                    type="text" 
                    placeholder='Email'
                    required
                    onChange={(event) => setLoginEmail(event.target.value)}
                    />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder='Password' 
                    required 
                    onChange={(event) => setLoginPassword(event.target.value)}
                    />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" onClick={handleLoginClick}>Login</button>

                <div className="register-link">
                    <p> Don't have an account? <Link to="/Signup">Register</Link></p>
                </div>
            </form>
            </div>
    );
};

export default Login;