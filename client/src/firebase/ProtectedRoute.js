import React from 'react';
import { AuthConsumer } from './authContext';
import { Route, Redirect} from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
      {({ user }) => (
        <Route render={props =>
            user ? <Component {...props} /> : <Redirect to="/" /> }
          {...rest}
        />
      )}
    </AuthConsumer>
  );

  export default ProtectedRoute;