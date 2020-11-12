import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ShowCards from './components/layout/ShowCards';
import SinglePokemon from './components/poke/SinglePokemon';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ShowCards} />
            <Route exact path="/pokemon/:pokeIndex" component={SinglePokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
