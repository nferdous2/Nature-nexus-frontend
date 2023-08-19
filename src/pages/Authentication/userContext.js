import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // Add this state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:8000/logout", null, {
        headers: { Authorization: token },
      });
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      window.location.reload();
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Logout failed. Please try again.");
    }
  };


  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn,  handleLogout,isVerified, setIsVerified }}
    >
      {children}
    </UserContext.Provider>
  );
};
