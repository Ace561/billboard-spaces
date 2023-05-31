import React, { createContext, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export const AuthComponent = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (username, email, password) => {
    return axios
      .post(`${API_BASE_URL}/register`, { username, email, password })
      .then(response => {
        console.log();(response.data);
        setUser(response.data.user);
      });
  };

  const login = (email, password) => {
    return axios
      .post(`${API_BASE_URL}/login`, { email, password })
      .then(response => {
        console.log();(response.data);
        setUser(response.data.user);
      });
  };

  return (
    <AuthComponent.Provider value={{ user, register, login }}>
      {children}
    </AuthComponent.Provider>
  );
};