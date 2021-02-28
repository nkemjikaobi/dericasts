import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NotFound from './components/NotFound';
import WeatherState from './context/weather/WeatherState'
import AlertState from './context/alert/AlertState'
import './App.css';


const App = () => {
  return (
    <WeatherState>
      <AlertState>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
   </WeatherState>
  );
}

export default App
