import logo from './assets/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App mwi-background">
      <div className="mwi-container">
        <header className="mwi-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <button
            className="contact-link"
            href="contact"
            rel="noopener noreferrer"
          >
            contact
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
