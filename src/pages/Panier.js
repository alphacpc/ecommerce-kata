import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import CartComponent from '../components/CartComponent';
import { useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { removeFromCart } from './../utils/redux/actions';


const Panier = () => {
  
  const [products, setProducts] = useState([]);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  function handleRemoveToCart(productId) {
    dispatch(removeFromCart(productId));
  }

  console.log(cart.cart)

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
            <p><span id="panier">Mon panier</span><sup>({cart.cart.length})</sup></p>
          </div>
        </div>


        <div className="divFlexCart">
          <div className="divCartItems">    
            { cart && cart.cart.map((product, index) => 
                <div key={index} className='divCartItem'>
                  <CartComponent product={product} handle={handleRemoveToCart}/>
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