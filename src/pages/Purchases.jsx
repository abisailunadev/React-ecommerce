import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import { getProductsThunk } from '../store/slices/products.slice';

const Purchases = () => {

  const dispatch = useDispatch();
  
  const purchases = useSelector(state => state.purchases)
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getPurchasesThunk())
    dispatch(getProductsThunk())
  }, [])

  console.log(purchases)

  const purchaseDate = (time) => {
    return new Date(time).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const productImg = (item) => {
    for(let i in products){
      if(products[i].id === item.id){
        return products[i].productImgs[0]
      }
    }
  }

  const productTotal = (item) => {
    const total = (item.productsInCart.quantity * item.price)
    return total
  }

  const productsTotal = (purchase) => {
    let sum = 0
    for(let i in purchase?.cart.products){
      sum = sum + (purchase.cart.products[i].price * purchase.cart.products[i].productsInCart.quantity)
    }
    return sum
  }

  const purchasedInTotal = () => {
    let sum = 0
    for(let i in purchases){
      sum = sum
    }
    return sum
  }

  return (
    <div className='purchases-view-container'>
      <h2>Your purchases</h2>
      <ul className='pch-ul'>
        {purchases.map(purchase => (
          <li key={purchase.id} className='pch-container'>
            <div className="pch-date-container">
              <p>{purchaseDate(purchase.createdAt)}</p>
            </div>
            <div className="pd-line"></div>
            <div className="pch-products-container">
              <ul className='pch-ul-products'>
                {purchase.cart.products.map(item => (              
                    <li className='pch-product-container' key={item.id}>
                      <div className="pch-pd-img-title-price">
                        <div className="pch-pd-img">
                          <img src={productImg(item)} alt="" />
                        </div>
                        <div className="pch-pd-title-price">
                          <p>{item.title}</p>
                          <p>${item.price}</p>
                        </div>
                      </div>
                      <div className="pch-pd-description">
                        <p>${productTotal(item)}</p>
                        <p>{item.productsInCart.quantity}</p>
                      </div>
                      <div className="pd-line"></div>
                    </li>
                ))}
              </ul>
            </div>
            <div className="pch-total-container">
              <p><b>Total</b>: ${productsTotal(purchase)}</p>
            </div>
          </li>
        )).reverse()}
      </ul>
      <div className="pch-total-pchs-container">
        <p><b>Total purchased</b>: {}</p>
      </div>
    </div>
  );
};

export default Purchases;