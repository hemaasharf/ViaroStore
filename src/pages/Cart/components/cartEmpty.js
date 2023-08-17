import { Link } from "react-router-dom"
import { MdShoppingCartCheckout } from "react-icons/md";

export const CartEmpty = () => {
  return (
    <section className=" text-xl text-center max-w-4xl m-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">

      <div className="justify-center items-center flex">
        <span className=" text-green-600 text-9xl  ">{<MdShoppingCartCheckout />}</span>
      </div>
      <div className="my-5  ">
        <p>Oops! Your cart looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>
      <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
