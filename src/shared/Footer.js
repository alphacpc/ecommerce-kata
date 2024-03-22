import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiShop, CiPhone, CiLocationOn } from "react-icons/ci";
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
            <LinkIconComponent to="/" icon={AiOutlineShop} text="Boutique" design={link}/>
            <LinkIconComponent to="/" icon={FaRegUser} text="Mon compte" design={link}/>
            <LinkIconComponent to="/" icon={CiShop} text="Les plus vendus" design={link}/>
            <LinkIconComponent to="/panier" icon={MdOutlineShoppingCart} text="Mon panier" design={link}/>
          </div>
        </div>

        <div className="footer-item">
          <h2 className="text-white text-upper text-2 margin-b20">Réseaux sociaux</h2>
          <div className="flex-column padding-10">
            <LinkIconComponent to="https://www.linkedin.com/in/alpha-amadou-diallo/" target={true} icon={FaLinkedinIn} text="Linkedin" design={link}/>
            <LinkIconComponent to="https://github.com/alphacpc" target={true} icon={FaGithub} text="Github" design={link}/>
            <LinkIconComponent to="https://medium.com/@alphacpc" target={true} icon={FaMediumM} text="Medium" design={link}/>
            <LinkIconComponent to="https://www.youtube.com/@phonse444" target={true} icon={RiYoutubeLine} text="Youtube" design={link}/>
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