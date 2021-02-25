import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NotFound from './components/NotFound';
import Day from './components/Day';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/weather/:day' component={Day} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
   </Router>
  );
}

export default App
