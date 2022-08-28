import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { filterByCategoryThunk } from '../store/slices/products.slice';
import { setShowAll } from '../store/slices/showAll.slice';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const [ categories, setCategories ] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
    .then(res => setCategories(res.data.data.categories))
  }, [])

  return (
    <div className='footer-container'>
      <div className="ft-our-information-container">
        <h3>Our information</h3>
        <ul>
          <li>
            Puebla - Mexico
          </li>
        </ul>
      </div>
      <div className="ft-about-container">
        <h3>About</h3>
        <ul>
          <li>Support Center</li>
          <li>Costumer Support</li>
          <li>Bugs</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="ft-product-container">
        <h3>Product</h3>
        <ul>
        {categories.map(category => (
                <li key={category.id} onClick={() => {navigate('/')
                dispatch(setShowAll(true))
                window.scrollTo(0, 0)
                dispatch(filterByCategoryThunk(category.id))}}>
                  {category.name}
                </li>
              ))}
        </ul>
      </div>
      <div className="ft-ecommerce-social-media-container">
        <h3>Social media</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/" target='_blank'>
              <i className='bx bxl-instagram-alt bx-md' ></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target='_blank'>
              <i className='bx bxl-facebook bx-md'></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target='_blank'>
              <i className='bx bxl-twitter bx-md' ></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="ft-social-media-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/abisailuna" target="_blank">
              <i className='bx bxl-linkedin-square bx-md' ></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/abisailunadev" target='_blank'>
              <i className='bx bxl-github bx-md' ></i>
            </a>
          </li>
        </ul>
      </div>
      <p>© Aldo Abisai Luna Rojas</p>
    </div>
  );
};

export default Footer;