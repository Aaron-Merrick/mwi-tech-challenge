import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MwiHeader from './components/Header';
import CardCalloutSection from './components/CardCalloutSection';
import PuzzleSection from './components/PuzzleSection';

import ContactText from './components/ContactText';
import ContactForm from './components/ContactForm';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div id="mwi-background" className="App">
        <div className="mwi-container">
          <MwiHeader></MwiHeader>
          <Switch>
            <Route exact path="/">
              <div className="mwi-container">
                <CardCalloutSection></CardCalloutSection>
                <PuzzleSection></PuzzleSection>
              </div>
            </Route>
            <Route path="/contact">
              <div id="contact-container" className="mwi-container">
                <ContactText></ContactText>
                <ContactForm></ContactForm>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;