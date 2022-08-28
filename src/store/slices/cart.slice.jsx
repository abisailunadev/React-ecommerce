import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig'
import { setIsLoading } from './isLoading.slice';
import { setIsCartWithProducts } from './isCartWithProducts.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      setCart: (state, action) => {
        const cart = action.payload
        return cart
      }
    }
})

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
        .then((res) => {
          dispatch(setCart(res.data.data.cart.products))
          dispatch(setIsCartWithProducts(true))
        })
        .catch(() => dispatch(setIsCartWithProducts(false)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductToCartThunk = (productToAdd) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', productToAdd, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => {
          dispatch(setIsLoading(false))
        });
}

export const updateProductInCartThunk = (productUpdated) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.patch('https://ecommerce-api-react.herokuapp.com/api/v1/cart', productUpdated, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteProductInCart = (token) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${token}`, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const purchaseCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {},getConfig())
        .then(() => dispatch(setCart([])))
        .finally(() => {
          dispatch(setIsLoading(false))
          dispatch(setIsCartWithProducts(false))
        });
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
