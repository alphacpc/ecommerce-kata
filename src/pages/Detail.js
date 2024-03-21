import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import axios from "axios";
import { IoMdStar } from "react-icons/io";
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addToCart } from './../utils/redux/actions';

const Detail = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams();

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }
      

  const fetchProductAPI = async ()=> {
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
    await setProduct(data.data);
  }


  useEffect(()=>{
    fetchProductAPI();
  },[])

  return (
    <div className="singleContainer">

      {
        product && <section className="section-container section-single-product div-flex-wrap">
          <div className="div-flex-1 center padding-t50">
            <img className="img-container" src={`${product?.image}`} alt={product?.title}/>              
          </div>

          <div className="div-flex-1 padding-20">
            <h1 className="font-h1 margin-b20">{product?.title}</h1>
        
            <p>
              <span className="bg-red padding-10">
                {product?.category}
              </span>
            </p>
            
            <p className="margin-v20 font-20">{product.description}</p>
            
            <p className="font-h1">
              {product?.price} euro
            </p>
            
            <div className="margin-v20 div-flex-wr flex-center">
              <span className="font-20 margin-r10">{product?.rating?.rate}</span>
              {[1,2,3].map((star,index) => <IoMdStar fill="orangered" className="icon-star" key={index} size={30} />)}
            </div>
            
            <p className="margin-b20">Disponibilité : <small>{product?.rating?.count}</small></p>

            <button onClick={handleAddToCart} className="btn btn-full-width padding-20 margin-t20 bg-yellow hover-black">
              <RiShoppingBasket2Line /> Ajouter au panier
            </button>
          </div>
        </section>
      }


    </div>
  )
}

export default Detail;