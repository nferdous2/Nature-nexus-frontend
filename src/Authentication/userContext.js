
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext();


// export const UserProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedUserRole = localStorage.getItem('userRole');

//     const fetchData = async () => {
//       if (token) {
//         setIsLoggedIn(true);
//         setUserRole(storedUserRole); // Set userRole from localStorage

//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   const handleLogout = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       await axios.post("http://localhost:8000/logout", null, {
//         headers: { Authorization: token },
//       });
//       localStorage.removeItem("token");
//       setIsLoggedIn(false);
//       setUserRole(null);
//       window.location.reload();
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert("Logout failed. Please try again.");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <UserContext.Provider
//       value={{ isLoggedIn, userRole, setLoading,setUserRole,loading, setIsLoggedIn, handleLogout }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserRole = localStorage.getItem("userRole");

    const fetchData = async () => {
      if (token) {
        try {
          const decodedToken = JSON.parse(atob(token.split(".")[1])); // assuming token is in the format "header.payload.signature"
          setUserId(decodedToken.userId);
          setIsLoggedIn(true);
          setUserRole(storedUserRole);
        } catch (error) {
          console.error("Error decoding token:", error);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:8000/logout", null, {
        headers: { Authorization: token },
      });
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUserRole(null);
      setUserId(null);
      window.location.reload();
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Logout failed. Please try again.");
   
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userRole,
        userId,
        setLoading,
        setUserRole,
        loading,
        setIsLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};