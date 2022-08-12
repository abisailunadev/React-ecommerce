import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowingCart } from '../store/slices/isShowingCart.slice';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  console.log(cart)

  const itemImage = (item) => {
    for(let i in products){
      if(products[i]?.id === item?.id){
        return products[i].productImgs[0]
      }
    }
  }

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
          <h2>Your shopping cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <div className="cart-item-img">
                  <img src={itemImage(item)} alt="" />
                </div>
                <div className="cart-item-description">
                  <div className="cart-item-brand-price">
                    <p>{item.brand}</p>
                    <p><b>{item.title}</b></p>
                  </div>
                  <h3>${item.price}</h3>
                </div>
                <div className="cart-item-options">
                  <button>
                    <i className='bx bx-trash'></i>
                  </button>
                  <p>{item.productsInCart.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;