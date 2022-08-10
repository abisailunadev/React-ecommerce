import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, filterByCategoryThunk } from '../store/slices/products.slice';
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetailed = () => {

  // React
  const [productData, setProductData] = useState({});
  const [sugestedProducts, setSugestedProducts] = useState([]);

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
    // Sugested products filtering
    const filteredProducts = allProducts.filter(product => product.category.id === productSelected.category.id)
    const filteredProductsFixed = filteredProducts.filter(product => product.id !== productSelected.id)
    setSugestedProducts(filteredProductsFixed)
  }, [allProducts, productId])

  console.log(productData)
  console.log(sugestedProducts)

  return (
    <div className='product-detailed-container'>
      <div className="pd-btn-container">
        <button onClick={() => navigate('/') /*-1*/}>
          <i className='bx bx-arrow-back'></i>
          <p>Back</p>
        </button>
      </div>
      <div className="pd-category-container" // onClick={() => {
      // navigate('/')
      // dispatch(filterByCategoryThunk(productData?.category?.id)) }}
      >
        <p>Category > {productData?.category?.name}</p>
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
              <h3>Add to cart</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="pd-description-container">
        <h3>About this product</h3>
        <p>{productData?.description}</p>
      </div>
      <div className="pd-sugested-products-container">
        <h3>You may like...</h3>
        <div className="pd-sugested-products-ul">
          <ul>
            {sugestedProducts.map(sugestedProduct => (
              <li key={sugestedProduct.id} onClick={() => {
                navigate(`/product/${sugestedProduct.id}`)
                window.scrollTo(0, 0);
              }}>
                <div className="pd-sugested-product-img-txt">
                  <div className="pd-sugested-product-img">
                    <img src={sugestedProduct.productImgs[0]} alt="" />
                  </div>
                  <div className="pd-line"></div>
                  <p><b>{sugestedProduct.title}</b></p>
                </div>
                <div className="product-price-buy">
                  <div className="product-price">
                    <p><b>Price</b></p>
                    <p>${sugestedProduct?.price}</p>
                  </div>
                  <div className="product-button">
                    <button>
                      <p>Add to cart</p>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailed;