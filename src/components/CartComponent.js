import React, {useState} from 'react';
import { IoMdStar } from 'react-icons/io';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { updateCart } from './../utils/redux/actions';

const CartComponent = ({product, handle}) => {

  const [currentQuantity, setCurrentQuantity] = useState(1)
  const dispatch = useDispatch();


  const handleDecrementer = (productId) => {

    if(currentQuantity <= 1){
      setCurrentQuantity(1)
    }else{
      setCurrentQuantity(currentQuantity-1)
    }
    dispatch(updateCart(productId, currentQuantity));

  }

  const handleIncrementer = (productId) => {
    if(currentQuantity >= 10){
      setCurrentQuantity(currentQuantity)
    }else{
      setCurrentQuantity(currentQuantity+1)
    }
    dispatch(updateCart(productId, currentQuantity));

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
          <button onClick={() => handle(product.id)}  className="flex border-none cursor-pointer border-r5 bg-red font-20 padding-5"><MdOutlineDelete fill="white" className="margin-r5" /> supprimer</button>
        </div>
      </div>
      
      <div className="divPriceQuantity">
        <div className='productQauntity'>
          <span onClick={()=> handleDecrementer(product.id)} data-product-id={product?.id} data-product-count={product?.rating.count} className="action cursor-pointer">-</span>
          <span className="value">{currentQuantity}</span>
          <span onClick={()=> handleIncrementer(product.id)} data-product-id={product?.id} data-product-count={product?.rating.count} className="action cursor-pointer">+</span>
        </div>
        <h4 className="div-flex-wrap">x {product.price} euro</h4>
      </div>
    
    </>
  )
}

export default CartComponent;