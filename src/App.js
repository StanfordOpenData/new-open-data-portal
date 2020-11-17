import React from 'react';
import './App.scss';
import { Switch, HashRouter, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Contribute from './components/Contribute';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={ LandingPage }/>
              <Route exact path='/aboutus' component={About}/>
              <Route exact path='/contribute' component={Contribute}/>
            </Switch>
          </div>
        </HashRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
