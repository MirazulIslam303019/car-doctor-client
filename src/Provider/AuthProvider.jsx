import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase-config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app)
const AuthProvider = ({children}) => {

    const [user,SetUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
     useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,currrentUser=>{
            SetUser(currrentUser);
            console.log('current user',currrentUser)
            setLoading(false)
        });
        return()=>{
            return unsubcribe();
        }
     }
     ,[])

    const authInfo={
        user,
        createUser,
        loading,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;