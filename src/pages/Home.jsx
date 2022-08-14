import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterByCategory from '../components/FilterByCategory';
import { getProductsThunk, filterProductsThunk } from '../store/slices/products.slice';
import { setIsShowing } from '../store/slices/isShowing.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  // React
  const [searchedValue, setSearchedValue] = useState('');
  const [ categories, setCategories ] = useState([]);
  const [ productInput, setProductInput ] = useState(1);

  // Router DOM
  const navigate = useNavigate();

  // Redux
  const products = useSelector(state => state.products);
  const isShowing = useSelector(state => state.isShowing);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductsThunk())
    // Categories
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
    .then(res => setCategories(res.data.data.categories))
  }, [])
  //console.log(products)
  
  const searchedValueFixed = `${searchedValue[0]?.toUpperCase()}${searchedValue.substring(1).toLowerCase()}`
  //console.log(searchedValueFixed)
  
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(filterProductsThunk(searchedValueFixed))
  }
  return (
    <div className="home">
      <div className="home-menu">
        <div className="input-container">
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder='Enter a product name'
              onChange={e => setSearchedValue(e.target.value)}
              value={searchedValue.trim()}
            />
            <button>Search</button>
          </form>
        </div>
        <div className="filter-container">
          <button onClick={() => dispatch(setIsShowing(true))} className='btn-for-filter'>
            <i className='bx bx-filter-alt' ></i>
            Filter
          </button>
          {isShowing &&
            <FilterByCategory categories={categories}/>
          }
        </div>
      </div>
      <div className='products-ul-container'>
        <ul>
          {products.map(product => (
            <li key={product.id} className='product-card' onClick={() => navigate(`/product/${product.id}`)}>

                <div className="product-image">
                  <img src={product.productImgs?.[0]} alt="" />
                </div>
                <div className="product-line"></div>

              <div className="product-description">
                <div className="product-title">
                  <p><b>{product.title}</b></p>
                </div>
                <div className="product-price-buy">
                  <div className="product-price">
                    <p><b>Price</b></p>
                    <p>${product.price}</p>
                  </div>
                  <div className="product-button">
                    <button className='add-product-btn'>
                      <i className='bx bxs-cart-add bx-xs' ></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;