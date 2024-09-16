import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import '../Pages/Login/Login/Login.jsx';
import '../Pages/Sign Up/Sign Up/Signup.jsx';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }    
    };
    return /*(
        <div>
            <input placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}> Sign In</button>        
        </div>
    );*/
};