import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { RiShoppingBasket2Line } from "react-icons/ri";
import LinkIconComponent from '../components/LinkIconComponent';
import ProductComponent from '../components/ProductComponent';
// import { Link } from 'react-router-dom';

const montant=444

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProductAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products")
    await setProducts(data.data);
  }

  const fetchCategoriesAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products/categories")
    await setCategories(data.data);
  }


  useEffect(()=>{
    fetchProductAPI();
    fetchCategoriesAPI();
  },[])

  return (
    <section className="section-container section-home div-flex-wrap div-flex-half">
      <aside className="div-flex-1 padding-20 h-40">
        <h2 className="text-2 text-upper text-red">Appliquer des filtres</h2>
        <form className="form-filter" method="post">

          <div className="margin-t20">
            <h3>Par recherche</h3>
            <input className="margin-t20 padding-5 width-full border-none outline-none" type="text" placeholder="Nom du produit"/>
          </div>

          <div className="margin-v20">
            <h3>Par categories</h3>
            {
              categories && categories.map((category, ind) => 
                <div key={ind} className="div-checkbox margin-v20">
                  <input type="checkbox" id={category}/>
                  <label className="font-20 margin-l10 text-upper" labelFor={category}>{category}</label>
                </div>
              )
            }
          </div>
          <div className="margin-t20">
            <h3>Par montant ({montant} euro)</h3>
            <input className="margin-t20" type="range" min="10" max="100"/>
          </div>
        </form>
        
      </aside>

      <main className="div-flex-2 div-flex-wrap div-full-width">

      {
        products && products.map((product,ind) => 
          <div className="div-product-card" key={ind}>
            <ProductComponent product={product}/>
          </div>
        )
      }

      

      </main>
    </section>
  )
}

export default Home