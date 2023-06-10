import React, { createContext, useState, useEffect } from 'react';
//imports the necessary dependencies//
import axios from 'axios';
import { API_BASE_URL } from '../config';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//The register function is defined. It takes username, email, and password as parameters and sends a POST request to the /register endpoint with the provided data. Upon successful registration, the response data is logged to the console and the user state is updated with the received user data.//
  const register = (username, email, password) => {
    return axios.post(`${API_BASE_URL}/register`, { username, email, password })
      .then(response => {
        console.log(response.data);
        setUser(response.data.user);
        
      });
  };
//The login function is defined. It takes email and password as parameters and sends a POST request to the /login endpoint with the provided credentials. Upon successful login, the response data is logged to the console, and the user state is updated with the received user data.//
  const login = (email, password) => {
    return axios.post(`${API_BASE_URL}/login`, { email, password })
      .then(response => {
        console.log(response.data);
        setUser(response.data.user);
      
      });
  };

  const logout = () => {
    setUser(null);
    
  };

 //The AuthProvider component returns the AuthContext.Provider, which wraps the children components. The provider value includes the user, register, login, and logout properties, allowing them to be accessed by the components consuming this context.//
  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

