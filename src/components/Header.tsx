import * as React from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import logo from '../assets/img/logo.png';

import '../styles/header.css';


const MwiHeader: React.FC = () => {
  const [location, setLocation] = React.useState(useLocation().pathname.slice(0,1));

  return (
    <header className="mwi-header">
      <img src={logo} alt="logo" />
      <Link to={location}>
        <button
          className="contact-link"
          onClick={ () => location === 'home' ? setLocation('contact') : setLocation('home') }
        >
          { location }
        </button>
      </Link>
    </header>
  );
}

export default MwiHeader;