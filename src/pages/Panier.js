import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CartComponent from '../components/CartComponent';
import { useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { removeFromCart } from './../utils/redux/actions';


const Panier = () => {
  
  const cart = useSelector(state => state.cart);
  const [total, setTotal] = useState(0);

  console.log(cart.cart)

  const dispatch = useDispatch();

  function handleRemoveToCart(productId) {
    dispatch(removeFromCart(productId));
  }


  useEffect(() => {
    let somme = 0;
    for (let product of cart.cart) {
      let quantity = product.quantity ? product.quantity  : 1
      somme += quantity * product.price;
    }
    setTotal(somme.toFixed(2));
  }, [cart]);


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

          {
            cart.cart.length > 0 ? <div className="divCartPrices">
            <h2>Résumé de la Commande</h2>
            <div>

              <div className="shipping-info total">
                <h4>Total</h4>
                <span>{total} euro</span>
              </div>
            </div>

            <div className="dinBtnCheckout">
              <Link to="/commande">Passer la commande</Link>
            </div>
          
          </div> : <div className="div-empty-panier">
            <p>Aucun produit sélectionné !</p>

          </div>
          }
        </div>

      </div>


    </div>
  )
}

export default Panier;