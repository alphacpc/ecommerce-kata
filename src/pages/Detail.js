import React, {useState, useEffect} from 'react';
import axios from "axios";
import { IoMdStar } from "react-icons/io";

const Detail = () => {

  const [product, setProduct] = useState({})

  const fetchProductAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products/1")
    await setProduct(data.data);
  }

  console.log(product);


  useEffect(()=>{
    fetchProductAPI();
  },[])

  return (
    <div className="singleContainer">

      {
        product && <section className="section-container section-single-product div-flex-wrap">
          <div className="div-flex-1 ">
            <img className="img-container" src={`${product?.image}`} alt={product?.title}/>              
          </div>

          <div className="div-flex-1 padding-20">
            <h1>{product?.title}</h1>
            <span>{product?.category}</span>
            <p>{product.description}</p>
            <span>{product?.price} euro</span>
            <div>
              <span>{product?.rating?.rate} <IoMdStar /></span>
            </div>
            <p>{product?.rating?.count}</p>
          </div>
        </section>
      }


    </div>
  )
}

export default Detail;