import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import TextPage from './pages/TextPage';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <BrowserRouter>
      <div className='text-white'>
        {/* <NavBar/> */}
        <Switch>
          <Route exact path='/' component={LandingPage} />  
          <Route path='/stories/:slug/content' component={TextPage} />        
          <Route path='/stories/:slug' component={DetailsPage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
