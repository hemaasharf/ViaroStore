import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    ProductList: [],
    sortBy: null,
    Raitngs: null,
    BestSeller: false,
    InStock: false
  },
  reducers: {
    FetchProducts(state, action) {
      state.ProductList = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },

    ToggleBestSeller(state){
      state.BestSeller = !state.BestSeller
    },
    ToggleInStock(state){
      state.InStock = !state.InStock
    },

  }
})

const store = configureStore({
  reducer: ProductSlice.reducer
})

export const selectProductList = (state) => state.ProductList;
export const selectOnlyInStock = (state) => state.InStock;
export const selectBestSellerOnly = (state) => state.BestSeller;

export const selectFilteredProducts = createSelector(
  selectProductList,
  selectOnlyInStock,
  selectBestSellerOnly,
  (ProductList, InStock, BestSeller) => {
    let filteredList = [...ProductList];

    if (InStock) {
      filteredList = filteredList.filter((product) => product.in_stock === true);
    }

    if (BestSeller) {
      filteredList = filteredList.filter((product) => product.best_seller === true);
    }

    // Apply other filters here

    return filteredList;
  }

)



export const { FetchProducts, ToggleInStock, ToggleBestSeller, setProductList } = ProductSlice.actions
export { store }