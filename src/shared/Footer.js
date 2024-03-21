import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { GrShop } from "react-icons/gr";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./../Assets/styles/footer.css";
import LinkIconComponent from '../components/LinkIconComponent';

const Footer = () => {
  return (
      <div className="footerContainer">
        <div className="footerItem column">
          <h2 className="logo"><Link to="/">kVtV.</Link></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci reprehenderit ducimus nostrum corrupti officia 
            repellendus, rem rerum quisquam. Fugiat earum, assumenda 
            porro aut cupiditate perspiciatis sequi reiciendis 
            explicabo eum dolore?</p>
        </div>

        <div className="footerItem">
          <h2>Pages</h2>

          <div className="column">
            <LinkIconComponent to="/" icon={AiOutlineShop} text="Boutique"/>
            <LinkIconComponent to="/" icon={FaRegUser} text="Mon compte"/>
            <LinkIconComponent to="/" icon={GrShop} text="Les plus vendus"/>
            <LinkIconComponent to="/" icon={MdOutlineShoppingCart} text="Mon panier"/>
          </div>
        </div>

        <div className="footerItem">
          <h2>Réseaux sociaux</h2>
          <div className="column">
            <LinkIconComponent to="/" icon={FaLinkedinIn} text="Linkedin"/>
            <LinkIconComponent to="/" icon={FaGithub} text="Github"/>
            <LinkIconComponent to="/" icon={FaMediumM} text="Medium"/>
            <LinkIconComponent to="/" icon={RiYoutubeLine} text="Youtube"/>
          </div>
        </div>

        <div className="footerItem">
          <h2>Contact</h2>
          <div className="column">
            <p><MdOutlineEmail/> kata@contact.com</p>
            <p><FiPhoneCall/> +221 33 000 00 00</p>
            <p><HiOutlineLocationMarker /> Senegal, Dakar</p>
          </div>
        </div>

      </div>
  )
}

export default Footer;