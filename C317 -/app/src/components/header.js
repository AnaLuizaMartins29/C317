import React from "react";
import './css/header.css';
import logo from '../assets/capitalis-logo.png';
import user from '../assets/user.jpeg';

const Header = ({ onToggleMenu }) => {  // Recebe a função como propriedade
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" /> {/* Adicione um alt para acessibilidade */}
        <span>Capitalis</span>
      </div>
      <div className="header-right">
        <button className="hamburger-button" onClick={onToggleMenu}>
          ☰
        </button>
        <span> Capitalis</span>
        <img src={user} alt="User" /> {/* Adicione um alt para acessibilidade */}
      </div>
    </div>
  );
}

export default Header;
