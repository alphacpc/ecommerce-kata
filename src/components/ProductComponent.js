import React from "react";
import LinkIconComponent from "./LinkIconComponent";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart } from './../utils/redux/actions';

const ProductComponent = ({ product }) => {

        const dispatch = useDispatch();

        function handleAddToCart() {
          dispatch(addToCart(product));
          alert(`Produit ${product.title} ajouté avec succès !`)
        }
      

        return (
                <>
                        <img className="img-container" src={`${product?.image}`} alt={product?.title} />
                        <div className="div-content-short">
                                <h3 className="text-3">
                                    <LinkIconComponent text={product?.title} to={`/detail/${product?.id}`}/>
                                </h3>

                                <div className="span-price">{product?.price} euro</div>
                                <button onClick={handleAddToCart} className="btn btn-full-width padding-10 margin-t20 bg-yellow hover-black">
                                        <RiShoppingBasket2Line /> Ajouter au panier
                                </button>
                        </div>
                </>
        );
};

export default ProductComponent;
