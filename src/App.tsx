import * as React from 'react';
import MwiHeader from './components/Header';
import CardCalloutSection from './components/CardCalloutSection';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App mwi-background">
      <div className="mwi-container">
        <MwiHeader></MwiHeader>
        <CardCalloutSection></CardCalloutSection>
      </div>
    </div>
  );
}

export default App;