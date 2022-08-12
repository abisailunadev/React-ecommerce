import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsShowingCart } from '../store/slices/isShowingCart.slice';

const Cart = () => {

  const dispatch = useDispatch();

  return (
    <div className='cart-overlay'>
      <div className="cart-overlay-space"></div>
      <div className="cart-container">
        <div className='cart-close-btn'>
          <button onClick={() => dispatch(setIsShowingCart(false))}>
            <i className='bx bx-x bx-sm' ></i>
          </button>
        </div>
        <div className="cart-data-container">
          <h2>Cart</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;