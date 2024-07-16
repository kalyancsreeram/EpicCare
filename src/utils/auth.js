import { useState, createContext, useContext, useEffect } from "react";

import React from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);    

    useEffect(() => {
        const token = !!localStorage.getItem('token');
        if(token){
            setUser(token);
        }        
    }, []);

    const login = (username) => {
        setUser(username);
    }

    const logout = () => {       
        localStorage.clear();
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}