import axios from "axios";
import React, {useState, useEffect} from "react";
import ProductComponent from "../components/ProductComponent";
import { useSelector} from "react-redux";



const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [montant, setMontant] = useState(20);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const cart = useSelector(state => state.cart);

  console.log(cart)
  

  const fetchProductAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products")
    await setProducts(data.data);

    if (products.length > 0) {
      const prices = products.map(product => product.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      await setMinPrice(min);
      await setMaxPrice(max);
      console.log(min)
      console.log(max)
    }
  }

  const fetchCategoriesAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products/categories")
    await setCategories(data.data);
  }

  const handleChangeMontant = (e)=> {
    setMontant(e.target.value)
  }

  useEffect(()=>{
    fetchProductAPI();
    fetchCategoriesAPI();
  },[])




  return (
    <section className="section-container section-home div-flex-wrap div-flex-half">
      <aside className="div-flex-1 padding-20 h-40 div-filter">
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
            <input onChange={(e) => handleChangeMontant(e)} className="margin-t20" value={montant} type="range" min={minPrice} max={maxPrice}/>
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