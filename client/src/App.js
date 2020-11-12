import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import TextPage from './pages/TextPage';

 

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/stories/:id' component={DetailsPage} />
          <Route path='/text' component={TextPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
