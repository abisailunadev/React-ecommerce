import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import { useParams } from 'react-router-dom'

const ProductDetailed = () => {

  const [ productData, setProductData ] = useState({});

  // Router DOM
  const { productId } = useParams();

  // Redux
  const allProducts = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])

  useEffect(() => {
    const productSelected = allProducts.find(product => product.id === Number(productId) )
    setProductData(productSelected)
  }, [])

  console.log(productData)

  return (
    <div>
      <button>Back</button>
      <div className="product-container">
        <h3>{productData?.title}</h3>
        <img src={productData?.productImgs?.[0]} alt="" />
      </div>
    </div>
  );
};

export default ProductDetailed;