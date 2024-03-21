import React, {useState} from 'react';
import { IoMdStar } from 'react-icons/io';
import { MdOutlineDelete } from 'react-icons/md';

const CartComponent = ({product}) => {

  const [currentQuantity, setCurrentQuantity] = useState(1)

  const handleDecrementer = (e) => {

    if(currentQuantity <= 1){
      setCurrentQuantity(1)
    }else{
      setCurrentQuantity(currentQuantity-1)
    }
  }

  const handleIncrementer = (e) => {
    if(currentQuantity >= 10){
      setCurrentQuantity(currentQuantity)
    }else{
      setCurrentQuantity(currentQuantity+1)
    }
  }

  return (
    <>
      <div className="divImageInfo">
        <div className='divImage'>
          <img src={product.image} alt={`${product.title}`}/>
        </div>
        
        <div className="divInfos" data-product-id={product?.id}>
          <h3>{product.title}</h3>
          <p className="margin-t10">{product.category}</p>
          <p className="div-flex-wrap margin-v10">{product?.rating?.rate} 
            {[1,2,3].map((start, index) => <IoMdStar key={index} fill="orangered" size={30} />)}
          </p>
          <button className="flex border-none cursor-pointer border-r5 bg-red font-20 padding-5"><MdOutlineDelete fill="white" className="margin-r5" /> supprimer</button>
        </div>
      </div>
      
      <div className="divPriceQuantity">
        <div className='productQauntity'>
          <span onClick={handleDecrementer} data-product-id={product?.id} data-product-count={product?.rating.count} className="action cursor-pointer">-</span>
          <span className="value">{currentQuantity}</span>
          <span onClick={handleIncrementer} data-product-id={product?.id} data-product-count={product?.rating.count} className="action cursor-pointer">+</span>
        </div>
        <h4 className="div-flex-wrap">x {product.price} euro</h4>
      </div>
    
    </>
  )
}

export default CartComponent;