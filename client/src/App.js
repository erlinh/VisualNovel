import React from 'react';
import { AuthProvider } from './firebase/authContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './firebase/ProtectedRoute';
import NavBar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import TextPage from './pages/TextPage';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='text-white'>
          {/* <NavBar/> */}
          <Switch>
            <Route exact path='/' component={LandingPage} />          
            <Route path='/login' component={LogInPage} />
            <ProtectedRoute path="/stories/:slug" component={DetailsPage} />
          {/*   <Route path='/stories/:slug' component={DetailsPage} /> */}
            <Route exact path='/search' component={SearchPage} />
            <Route path='/text' component={TextPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );

}

export default App;
