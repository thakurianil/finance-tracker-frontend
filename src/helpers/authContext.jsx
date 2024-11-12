// src/utils/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import {
  removeJWTtoken,
  setJWTtoken,
  userLogin,
  verifyToken,
} from "./axiosHelper";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [globalMessage, setGlobalMessage] = useState("");
  const [user, setUser] = useState(null);
  const [userid, setUserId] = useState(null);

  const autoLogin = async () => {
    // call verify endpoint
    const response = await verifyToken();
    if (response.status == "success") {
      setUser(response.data.username);
      setUserId(response.data._id);
    }
  };

  const login = async (loginInfo) => {
    try {
      const response = await userLogin(loginInfo);
      const { token, username } = response.data;

      setJWTtoken(token);
      setUser(username);
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  };

  const logout = () => {
    removeJWTtoken(); // Clear the token on logout
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userid,
        login,
        logout,
        autoLogin,
        globalMessage,
        setGlobalMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
