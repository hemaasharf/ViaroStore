import { createContext, useContext, useReducer } from "react"
import { CartReducer } from '../reducers/CartReducer'
import { toast } from "react-toastify";
import { useSession } from "./sessionContext";
const intialState = {
  cartList: [],
  total: 0
}
const CartContext = createContext(intialState);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, intialState);

  const {isLogged} = useSession()


  function addToCart(product) {
    const updated = state.cartList.concat(product)
    if (isLogged === false) {
      toast.error("Log In First To Start Shopping ", {
        position: "top-right",
        autoClose: 500,
        closeButton: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {dispatch({
      type: 'Add_To_Cart',
      payload: {
        products: updated,
        total: state.total + product.price
      }

    })}
  }
  function removeFromCart(product) {
    const updated = state.cartList.filter((item) => item.id !== product.id)

    dispatch({
      type: 'Remove_From_Cart',
      payload: {
        products: updated,
        total: state.total - product.price
      }
    })
  }
  function clearCart(product) {
    dispatch({
      type: 'Clear_Cart',
      payload: []
    })
  }

  const valueToShare = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,


  }
  return <CartContext.Provider value={valueToShare}>
    {children}
  </CartContext.Provider>
}
export function useCart() {
  return useContext(CartContext)
}