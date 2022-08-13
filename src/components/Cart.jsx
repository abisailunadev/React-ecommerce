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
          <div className="cart-items-container">
            <h2>Your shopping cart</h2>
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  <div className="cart-item-img-description">
                    <div className="cart-item-img">
                      <img src={itemImage(item)} alt="" />
                    </div>
                    <div className="cart-item-description">
                      <div className="cart-item-brand-price">
                        <p><b>{item.title}</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="pd-line"></div>
                  <div className="cart-item-price">
                    <p>${item.price}</p>
                  </div>
                  <div className="cart-item-quantity-options">
                    <div className="cart-item-options">
                      <button>+</button>
                      <span>1</span>
                      <button>-</button>
                    </div>
                    <div>
                      <button className='cart-item-delete-btn'>
                        <i className='bx bxs-trash'></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-total-pay-container">
            <p>Total: </p>
            <button className='cart-checkout-btn'>
              <h3>Checkout</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;