import React, { useCallback, useEffect, useState } from 'react';
import { ProductRating } from './';
import { UpdateTitle } from '../components'
import { useParams } from 'react-router-dom';
import { useCart } from '../context';
import { getProductDetail } from '../services';
import { useSession } from '../context/sessionContext';


export const ProductDetail = () => {

  const [product, setProduct] = useState({})
  const { id, name, overview, long_description, poster, rating, best_seller, in_stock, price, size } = product
  const { addToCart, removeFromCart, cartList } = useCart()
  const param = useParams()
  const{fetchingError} = useSession()


  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProductDetail(param.id)
      setProduct(response.data)
    }
    catch (error) {
      fetchingError("Error Fetching Product_Details From The Server")
    }
  }, [param.id, fetchingError])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // for toggling add or remove item's button
  const [isInCart, setIsInCart] = useState(false)
  useEffect(() => {
    const isProductIn = cartList.find((items) => items.id === id);
    isProductIn ? setIsInCart(true) : setIsInCart(false)

  }, [cartList, id])



  return (
    <main>
      <UpdateTitle title={name} />
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-gray-100">{name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-white">{overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={poster} alt={name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{price}</span>
            </p>
            <p className="my-3">
              <span className='flex flex-wrap'>
                <ProductRating rating={rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
              {in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
              {!in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{size} MB</span>
            </p>
            <p className="my-3">
              {!isInCart ? <button disabled={in_stock ? "" : 'disabled'} onClick={() => addToCart(product)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> : <button onClick={() => removeFromCart(product)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button>}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  )

};

