import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, filterByCategoryThunk } from '../store/slices/products.slice';
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
        <button onClick={() => navigate(-1)}>
          <i className='bx bx-arrow-back'></i>
          <p>Back</p>
        </button>
      </div>
      <div className="pd-category-container" // onClick={() => {
        // navigate('/')
        // dispatch(filterByCategoryThunk(productData?.category?.id)) }}
      >
        <p>{productData?.category?.name}</p>
      </div>
      <div className="product-container">
        <h2>{productData?.title}</h2>
        <div className="pd-img-container">
          <img src={productData?.productImgs?.[0]} alt="" />
        </div>
        <div className="pd-line"></div>
        <div className="product-price-buy">
          <div className="product-price">
            <h3>Price</h3>
            <p>${productData?.price}</p>
          </div>
          <div className="product-button">
            <button>
              <h4>Add to cart</h4>
            </button>
          </div>
        </div>
      </div>
      <div className="pd-description-container">
        <h3>About this product</h3>
        <p>{productData?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailed;