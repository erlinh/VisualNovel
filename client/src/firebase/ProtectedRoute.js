import React, { useContext } from 'react';
import { AuthContext } from './authContext';
import { Route, Redirect} from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { userID } = useContext(AuthContext);

    return (
        <Route render={props =>
            userID ? <Component {...props} /> : <Redirect to="/login" /> }
          {...rest}
        />
    )
};

  export default ProtectedRoute;