import React, { useEffect, useState } from 'react';
import firebaseApp from './firebase.config';

export const AuthContext = React.createContext({user: null});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //console.log(user);

    // all components in the App.js are wrapped in this context
    // so whenever the app is opened, the firebase is initialized and listening to the changes to the auth status (logging in/out)
    // whenever someone is logging in, the user object includes everything that firebase returns (incl. uid, refreshingToken)
    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider value={{ user }} >
            {children}
        </AuthContext.Provider>
    );
};

export const AuthConsumer = AuthContext.Consumer;