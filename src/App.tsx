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
      <div className="App">
        <div className="mwi-container">
          <Switch>
            <Route exact path="/">
              <div className="black-background">
                <div className="page-container">
                  <MwiHeader></MwiHeader>
                  <div className="page-content">
                    <CardCalloutSection></CardCalloutSection>
                    <PuzzleSection></PuzzleSection>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/contact">
              <div className="contact-container">
                <div className="black-background contact-content">
                  <div className="page-container">
                    <MwiHeader></MwiHeader>
                  </div>
                  <ContactText></ContactText>
                </div>
                <div className="white-background contact-content">
                  <ContactForm></ContactForm>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;