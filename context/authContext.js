import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';
import { API_BASE_URL } from '../config';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const register = (username, email, password) => {
    return axios.post(`${API_BASE_URL}/register`, { username, email, password })
      .then(response => {
        setUser(response.data.user);
        
      });
  };

  const login = (email, password) => {
    return axios.post(`${API_BASE_URL}/login`, { email, password })
      .then(response => {
        setUser(response.data.user);
      
      });
  };

  const logout = () => {
    setUser(null);
    
  };

 
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