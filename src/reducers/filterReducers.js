export const filterReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "PRODUCT_LIST":
            return { ...state, productList: payload }

        case "SORT_BY":
            return { ...state, sortBy: payload }

        case "RATINGS":
            return { ...state, ratings: payload }

        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload }

        case "ONLY_IN_STOCK":
            return { ...state, onlyInStock: payload }

        case "CLEAR_FILTER":
            return {
                ...state,
                onlyInStock: false,
                bestSellerOnly: false,
                sortBy: null,
                ratings: null
            }

        default:
            throw new Error("No Case Found!");
    }
}