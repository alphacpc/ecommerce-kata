import React from 'react';
import { Link} from 'react-router-dom';
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import "./../Assets/styles/header.css";



const Header = () => {

  return (
    <div className="navbarContainer">
        <div className="divLogoHeader">
            <Link to="/"><span>kVtV.</span></Link>
        </div>
        <div className="divLinkAuth">
            <Link to="/"><FiHome /> Accueil</Link>
            <Link to="#"><AiOutlineShop /> Boutique</Link>
            <Link to="/panier"><MdOutlineShoppingCart /> Panier</Link>
            <Link to="#"><FaRegUser /> se connecter</Link>
        </div>
    </div>
  )
}

export default Header;