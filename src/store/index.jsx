import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/products.slice';
import isLoadingSlice from './slices/isLoading.slice';
import isShowingSlice from './slices/isShowing.slice';
import showAllSlice from './slices/showAll.slice';

export default configureStore({
    reducer: {
      products: productsSlice,
      isLoading: isLoadingSlice,
      isShowing: isShowingSlice,
      showAll: showAllSlice
    }
})
