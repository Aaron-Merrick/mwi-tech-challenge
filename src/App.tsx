import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MwiHeader from './components/Header';
import CardCalloutSection from './components/CardCalloutSection';
import PuzzleSection from './components/PuzzleSection';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App mwi-background">
        <div className="mwi-container">
          <MwiHeader></MwiHeader>
          <Switch>
            <Route exact path="/home">
              <div className="mwi-container">
                <CardCalloutSection></CardCalloutSection>
                <PuzzleSection></PuzzleSection>
              </div>
            </Route>
            <Route path="/contact">
              <h1>contact</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;