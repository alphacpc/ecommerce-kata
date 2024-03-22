import axios from "axios";
import React, {useState, useEffect} from "react";
import ProductComponent from "../components/ProductComponent";



const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [montant, setMontant] = useState(100);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const fetchProductAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products")
    await setFilteredProducts(data.data);
    await setProducts(data.data);
    
  }

  const fetchCategoriesAPI = async ()=> {
    const data = await axios.get("https://fakestoreapi.com/products/categories")
    await setCategories(data.data);
  }

  const handleChangeMontant = (e)=> {
    setMontant(e.target.value)
  }

  const handleChangeSearch = (e) => {
    
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);

    console.log(filteredProducts)

  }

  useEffect(()=>{
    fetchProductAPI();
    fetchCategoriesAPI();

    if (filteredProducts.length > 0) {
      const prices = filteredProducts.map(product => product.price);
      setMinPrice(Math.min(...prices));
      setMaxPrice(Math.max(...prices));
    }

  },[])




  return (
    <section className="section-container section-home div-flex-wrap div-flex-half">
      <aside className="div-flex-1 padding-20 h-40 div-filter">
        <h2 className="text-2 text-upper text-red">Appliquer des filtres</h2>
        <form className="form-filter" method="post">

          <div className="margin-t20">
            <h3>Par recherche</h3>
            <input onChange={(e) => handleChangeSearch(e)} className="margin-t20 padding-5 width-full border-none outline-none" type="text" placeholder="Nom du produit"/>
          </div>

          <div className="margin-v20">
            <h3>Par categories</h3>
            {
              categories && categories.map((category, ind) => 
                <div key={ind} className="div-checkbox margin-v20">
                  <input type="checkbox" id={category}/>
                  <label className="font-20 margin-l10 text-upper" labelfor={category}>{category}</label>
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
          filteredProducts && filteredProducts.map((product,ind) => 
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