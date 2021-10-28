import * as React from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import logo from '../assets/img/logo.png';

import '../styles/header.css';

const MwiHeader: React.FC = () => {
  let route = '';
  const location = useLocation().pathname;

  location === '/' ? route = 'contact' : route = '/';

  return (
    <nav className="mwi-header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to={route}>
        <button
          className="contact-link"
        >
          { route === '/' ? 'home' : 'contact' }
        </button>
      </Link>
    </nav>
  );
}

export default MwiHeader;