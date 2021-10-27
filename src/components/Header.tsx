import * as React from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import logo from '../assets/img/logo.png';

import '../styles/header.css';

const MwiHeader: React.FC = () => {
  const [location, setLocation] = React.useState(useLocation().pathname.slice(0,1));

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