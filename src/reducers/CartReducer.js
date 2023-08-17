export const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case "Add_To_Cart":
      return { ...state, cartList: payload.products, total: payload.total }
    case "Remove_From_Cart":
      return { ...state, cartList: payload.products, total: payload.total }
    case "Clear_Cart":
      return { ...state, cartList: payload , total:0}
    default:
      throw new Error("No Case Found!");
  }
}