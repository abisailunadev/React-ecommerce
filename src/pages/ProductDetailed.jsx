import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetailed = () => {

  const [productData, setProductData] = useState({});

  // Router DOM
  const { productId } = useParams();
  const navigate = useNavigate();

  // Redux
  const allProducts = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])

  useEffect(() => {
    const productSelected = allProducts.find(product => product.id === Number(productId))
    setProductData(productSelected)
  }, [])

  console.log(productData)

  return (
    <div className='product-detailed-container'>
      <div className="pd-btn-container">
        <button onClick={() => navigate('/')}>
          <i className='bx bx-arrow-back'></i>
          <p>Back</p>
        </button>
      </div>
      <div className="product-container">
        <div className="pd-img-container">
          <img src={productData?.productImgs?.[0]} alt="" />
        </div>
        <div className="pd-line"></div>
        <h3>{productData?.title}</h3>
        <div className="product-price-buy">
          <div className="product-price">
            <p>Price</p>
            <p>${productData?.price}</p>
          </div>
          <div className="product-button">
            <button>Buy</button>
          </div>
        </div>
        <div className="pd-line"></div>
        <div className="pd-description-container">
          <p>{productData?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailed;