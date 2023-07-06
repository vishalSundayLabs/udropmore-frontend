import React from 'react';
import { Route, Redirect, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    const navigate = useNavigate()
    const redirect = ()=>{
        navigate("/login")
    }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
           redirect() 
        )
      }
    />
  );
};

export default PrivateRoute;
