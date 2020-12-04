import React, { useContext } from 'react';
import { AuthContext } from './authContext';
import { Route, Redirect} from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route render={props =>
            user ? <Component {...props} /> : <Redirect to="/login" /> }
          {...rest}
        />
    )
};

  export default ProtectedRoute;