import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../config';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          setUser(JSON.parse(userString));
        }
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const register = (username, email, password) => {
    return axios.post(`${API_BASE_URL}/register`, { username, email, password })
      .then(response => {
        setUser(response.data.user);
        AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      });
  };

  const login = (email, password) => {
    return axios.post(`${API_BASE_URL}/login`, { email, password })
      .then(response => {
        setUser(response.data.user);
        AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      });
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('user');
  };

  if (loading) {
    return null;
  }

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