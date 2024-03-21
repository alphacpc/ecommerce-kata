import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { MdOutlineDelete } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import CartComponent from '../components/CartComponent';



const Panier = () => {
  
  const [products, setProducts] = useState([]);

  const fetchProductAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products")
    await setProducts(data.data);
  }


  useEffect(()=>{
    fetchProductAPI();
  },[])


  return (
    <div className="cartContainer">

      <div className="divContentCart">
        
        <div className="divTop">
          <Link to="/">Poursuivre les achats</Link>
          <div>
            <p><span id="panier">Mon panier</span><sup>(2)</sup></p>
          </div>
        </div>


        <div className="divFlexCart">
          <div className="divCartItems">    
            { products && products.slice(0,4).map((product, index) => 
                <div key={index} className='divCartItem'>
                  <CartComponent product={product}/>
              </div>
              )
            }
            
          </div>

          <div className="divCartPrices">
            <h2>Résumé de la Commande</h2>
            <div>
              <div className="shipping-info">
                <h4>Sous total</h4>
                <span>100000 euro</span>
              </div>

              <div className="shipping-info">
                <h4>Frais de livraison</h4>
                <span>1000 euro</span>
              </div>

              <div className="shipping-info total">
                <h4>Total</h4>
                <span>110000 euro</span>
              </div>
            </div>

            <div className="dinBtnCheckout">
              <Link to="/commande">Passer la commande</Link>
            </div>
          
          </div>
        </div>

      </div>


    </div>
  )
}

export default Panier;