import React from 'react';
import { useNavigate } from 'react-router-dom'
import { setIsShowingCart } from '../store/slices/isShowingCart.slice'
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';
import { useEffect } from 'react';

const NavBar = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const isCartWithProducts = useSelector(state => state.isCartWithProducts)

  return (
    <nav>
      <div className="nav-icon" onClick={() => navigate('/')}>
        <p><i className='bx bxl-etsy bx-lg'></i></p>
      </div>
      <div className="nav-search-bar">
        <input type="text" />
      </div>
      <div className="nav-options">
        <ul>
          <li onClick={() => token ? navigate('/user') : navigate('/login')}><i className='bx bxs-user bx-sm'></i></li>
          <li onClick={() => navigate('/purchases')}><i className='bx bxs-basket bx-sm' ></i></li>
          <li onClick={() => token ? dispatch(setIsShowingCart(true)) : navigate('/login')}>
            {isCartWithProducts ?
              (
                <i className='bx bxs-cart bx-sm' ></i>
              ) : (
                <i className='bx bx-cart bx-sm' ></i>
              )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;