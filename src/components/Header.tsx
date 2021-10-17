import * as React from 'react';
import logo from '../assets/img/logo.png';

import '../styles/header.css';

const MwiHeader: React.FC = () => {
  return (
    <header className="mwi-header">
      <img src={logo} alt="logo" />
      
      <button
        className="contact-link"
        // href="contact"
      >
      contact
      </button>
    </header>
  );
}

export default MwiHeader;