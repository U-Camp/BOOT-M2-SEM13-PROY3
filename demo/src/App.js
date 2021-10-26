import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import CurrenciesRates from './components/CurrenciesRates'
import Heading from './components/Heading';


function App() {

  return (
    <>
      <Router>
        
        <div className="flex">
          <Heading />
          
          <Switch>
            <Route exact path="/:currency" component={CurrenciesRates} />
          </Switch>
        </div>

      </Router>
    </>
    
  );
}

export default App;
