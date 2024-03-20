import React from 'react';
import { Link} from 'react-router-dom';
import "./../Assets/styles/header.css";



const Header = () => {

  return (
    <div className="navbarContainer">
        <div className="divLogoHeader">
            <Link to="/"><span>kVtV.</span></Link>
        </div>
        <div className="divLinkAuth">
            <Link to="/">Accueil</Link>
            <Link to="/">A propos</Link>
            <Link to="/boutique">Boutique</Link>
            <Link to="/inscription">s'inscrire</Link>
        </div>
    </div>
  )
}

export default Header;