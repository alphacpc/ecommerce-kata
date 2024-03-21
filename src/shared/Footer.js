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
import { LuShoppingBag } from "react-icons/lu";
import { CiShop, CiPhone, CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./../Assets/styles/footer.css";
import LinkIconComponent from '../components/LinkIconComponent';

const Footer = () => {

  const link = "margin-b20 text-white text-20"

  return (
      <div className="footer-container div-flex-wrap">
        <div className="footer-item">
          <h2 className="text-20 text-red margin-b20">kVtV.</h2>
          <div className="flex-column padding-10">
            <span className="text-20 text-white text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci reprehenderit ducimus nostrum corrupti officia 
            repellendus, rem rerum quisquam. Fugiat earum, assumenda 
            porro aut cupiditate perspiciatis sequi reiciendis 
            explicabo eum dolore?</span>
          </div>
        </div>

        <div className="footer-item">
          <h2 className="text-white text-upper text-2 margin-b20">Pages</h2>
          <div className="flex-column padding-10">
            <LinkIconComponent to="/" icon={AiOutlineShop} text="Boutique" style={link}/>
            <LinkIconComponent to="/" icon={FaRegUser} text="Mon compte" style={link}/>
            <LinkIconComponent to="/" icon={CiShop} text="Les plus vendus" style={link}/>
            <LinkIconComponent to="/" icon={MdOutlineShoppingCart} text="Mon panier" style={link}/>
          </div>
        </div>

        <div className="footer-item">
          <h2 className="text-white text-upper text-2 margin-b20">Réseaux sociaux</h2>
          <div className="flex-column padding-10">
            <LinkIconComponent to="/" icon={FaLinkedinIn} text="Linkedin" style={link}/>
            <LinkIconComponent to="/" icon={FaGithub} text="Github" style={link}/>
            <LinkIconComponent to="/" icon={FaMediumM} text="Medium" style={link}/>
            <LinkIconComponent to="/" icon={RiYoutubeLine} text="Youtube" style={link}/>
          </div>
        </div>

        <div className="footer-item">
          <h2 className="text-white text-2 margin-b20 text-upper">Contact</h2>
          <div className="flex-column padding-10">
            <p className="text-white margin-b20 font-20"><MdOutlineEmail fill="white"/> kata@contact.com</p>
            <p className="text-white margin-b20 font-20"><CiPhone fill="white"/> +221 33 000 00 00</p>
            <p className="text-white margin-b20 font-20"><CiLocationOn fill="white" /> Senegal, Dakar</p>
          </div>
        </div>

      </div>
  )
}

export default Footer;