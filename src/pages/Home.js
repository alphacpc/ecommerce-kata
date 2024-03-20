import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom';

const montant=444

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProductAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products")
    await setProducts(data.data);
    console.log(products);
  }

  const fetchCategoriesAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products/categories")
    await setCategories(data.data);
  }

  console.log(categories);


  useEffect(()=>{
    fetchProductAPI();
    fetchCategoriesAPI();
  },[])

  return (
    <section className="section-container section-home div-flex-wrap div-flex-half">
      <aside className="div-flex-1 padding-20 h-40">
        <h2 className="text-2 text-upper">Appliquer des filtres</h2>
        <form className="form-filter" method="post">
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
            <img className="img-container" src={`${product?.image}`} alt={product?.title}/>              
            <div className="div-content-short">
              <h3 className="text-3">{product?.title}</h3>
              
              <div className="span-price">{product?.price} euro</div>
              
              <button className="btn btn-full-width padding-10 margin-t20 bg-yellow hover-black">Ajouter au panier</button>
            </div>
            
          </div>
        )
      }

      

      </main>
    </section>
  )
}

export default Home