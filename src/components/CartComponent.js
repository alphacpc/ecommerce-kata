import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { MdOutlineDelete } from 'react-icons/md';

const CartComponent = ({product}) => {
  return (
    <>
      <div className="divImageInfo">
                      <div className='divImage'>
                          <img src={product.image} alt={`${product.title}`}/>
                      </div>
                      <div className='divInfos'>
                          <h3>{product.title}</h3>
                          <p>{product.category}</p>
                          <p>{product?.rating?.rate} <IoMdStar /></p>
                          <button><MdOutlineDelete /> supprimer</button>
                      </div>
                  </div>
                  <div className="divPriceQuantity">
                      <div className='productQauntity'>
                        <span className="action">-</span>
                        <span className="value">1</span>
                        <span className="action">+</span>
                      </div>
                      <h4 className="div-flex-wrap">{product.price} euro</h4>
                  </div>
    
    </>
  )
}

export default CartComponent;