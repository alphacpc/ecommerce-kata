import React from 'react';
import { Link} from 'react-router-dom';
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import "./../Assets/styles/header.css";
import LinkIconComponent from '../components/LinkIconComponent';



const Header = () => {

  return (
    <div className="navbarContainer">
        <div className="divLogoHeader">
            <Link to="/"><span>kVtV.</span></Link>
        </div>
        <div className="divLinkAuth">
            <LinkIconComponent to="/" icon={FiHome} text="Accueil" />
            <LinkIconComponent to="#" icon={AiOutlineShop} text="Boutique" />
            <LinkIconComponent to="/panier" icon={MdOutlineShoppingCart} text="Panier" />
            <LinkIconComponent to="#" icon={FaRegUser} text="se connecter" />
        </div>
    </div>
  )
}

export default Header;