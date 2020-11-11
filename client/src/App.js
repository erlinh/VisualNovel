import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/stories/:slug' component={DetailsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
