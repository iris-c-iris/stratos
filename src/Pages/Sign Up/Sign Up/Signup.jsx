import React from 'react';
import { useState } from 'react';
import './Signup.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from './BlackLogo.png';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Config/firebase';


const Signup =  () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const handleRegisterClick = async (event) => { 
        event.preventDefault();
     try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log("User created:", user)
         } catch (error) {
            console.log("Error creating user:", error.message);
    }
};


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
                    <input type="text" placeholder='EmployeeID' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder='Email' 
                        onChange={(event) => setRegisterEmail(event.target.value) } 
                        required
                    />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder='Password' 
                        onChange={(event) => setRegisterPassword(event.target.value) } 
                        required 
                    />
                    <FaLock className='icon' />
                </div>
                <div className="register-link">
                    <p> Already have an account? <Link to="/Login">Login</Link></p>
                </div>
                <button type="submit" onClick={handleRegisterClick}>Create</button>
            </form>
            </div>
    );
};

export default Signup;