import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observing : ',currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    } ,[])
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }
    const authInfo = {user, setUser, createUser, signIn, signOutUser}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;