import React from "react";
import logo from '../assets/homePicture/photoPortfolio.jpeg';
import '../style/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="imgPortfolio" alt="photo profil" />
      <nav className="navHeader">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/mesProjets">Projets</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
