import React from 'react';
import { Link } from 'react-router-dom';
import "./../Assets/styles/footer.css";

const Footer = () => {
  return (
      <div className="footerContainer">
        <div className="footerItem">
          <h1><Link to="/">kVtV.</Link></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci reprehenderit ducimus nostrum corrupti officia 
            repellendus, rem rerum quisquam. Fugiat earum, assumenda 
            porro aut cupiditate perspiciatis sequi reiciendis 
            explicabo eum dolore?</p>
        </div>

        <div className="footerItem">
          <h2>Liens</h2>

          <div className="column">
            <Link to="/">Acceuil</Link>
            <Link to="/">Mon panier</Link>
          </div>
        </div>

        <div className="footerItem">
          <h2>Réseaux sociaux</h2>
          <div className="column">
            <Link to="/">Linkedin</Link>
            <Link to="/">Github </Link>
            <Link to="/">Medium </Link>
          </div>
        </div>

        <div className="footerItem">
          <h2>Contact</h2>
          <div className="column">
            <p>kata@contact.com</p>
            <p> +221 33 000 00 00</p>
            <p> Dakar, Senegal</p>
          </div>
        </div>

      </div>
  )
}

export default Footer;