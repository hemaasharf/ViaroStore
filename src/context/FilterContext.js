import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function FetchProducts(list) {
        dispatch({
            type: 'PRODUCT_LIST',
            payload: list
        })
    }
    //"in_stock""best_seller"
    function bestSeller(list) {
        return state.bestSellerOnly ? list.filter((product) => product.best_seller === true) : list
    }
    function inStock(list) {
        return state.onlyInStock ? list.filter((product) => product.in_stock === true) : list
    }
    function sort(products) {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if (state.sortBy === "hightolow") {
            return products.sort((b, a) => Number(a.price) - Number(b.price));
        }
        return products;
    }

    function rating(products) {
        if (state.ratings === "4STARSABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3STARSABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2STARSABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        if (state.ratings === "1STARSABOVE") {
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }
    const rerenderedProductList = sort(rating(inStock(bestSeller(state.productList))))

    const value = {
        state,
        dispatch,
        FetchProducts,
        productList: rerenderedProductList,
        cartList: state.cartList,
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}