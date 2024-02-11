import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Authentication/userContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn ,loading} = useContext(UserContext);
if(loading){
  return <h1>Site is loading</h1>
}
  if (isLoggedIn) {
    return children;
  } else {
    alert("You are not logged in. Please login first.");
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
