import { auth } from "firebase";
import { currentUser } from "firebase/auth";
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';



const registerUser = async (email, password, profileData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Save the user's profile information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: profileData.name,
        age: profileData.age,
        phoneNumber: profileData.phoneNumber,
        // Add other profile fields as needed
      });
  
      console.log("User profile added to Firestore!");
    } catch (error) {
      console.error("Error creating user or adding profile:", error.message);
    }
  };