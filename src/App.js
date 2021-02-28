import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NotFound from './components/NotFound';
import WeatherState from './context/weather/WeatherState'
import './App.css';


const App = () => {
  return (
    <WeatherState>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
   </WeatherState>
  );
}

export default App
