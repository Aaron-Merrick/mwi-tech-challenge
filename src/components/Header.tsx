import * as React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

import '../styles/header.css';

const MwiHeader: React.FC = () => {
  const [location, setLocation] = React.useState('contact');

  React.useEffect(() =>{
    if (location === '/') {
      document.getElementById("mwi-background")!.style.background = "linear-gradient(90deg, var(--mwi-dark-gray) 50%, white 50%)";
    } else {
      document.getElementById("mwi-background")!.style.background = "var(--mwi-dark-gray)";
    }
  })

  return (
    <nav className="mwi-header">
      <img src={logo} alt="logo" />
      <Link to={location}>
        <button
          className="contact-link"
          onClick={ () => location === '/' ? setLocation('contact') : setLocation('/') }
        >
          { location === '/' ? 'home' : location }
        </button>
      </Link>
    </nav>
  );
}

export default MwiHeader;