import { Link } from 'react-router-dom';
import {ProductRating} from '../../pages/Proudct/components/ProductRating';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
export const ProductCard = ({ item }) => {

    const { id, name, overview, poster, rating, best_seller, in_stock, price } = item
    const [InStock, setInStock] = useState(false)

    const { addToCart, cartList, removeFromCart} = useCart()

    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        const isProductIn = cartList.find((items) => items.id === id);
        isProductIn ? setIsInCart(true) : setIsInCart(false)

    }, [cartList, item, id])


    function handleClick(obj) {
        addToCart(obj)
    }

    return (
        <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" onMouseEnter={() => setInStock(true)} onMouseLeave={() => setInStock(false)}>
            <Link to={`/products/${id}`} className="relative" >
                <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">{best_seller ? "Best Seller" : ''}</span>
                <img className="rounded-t-lg w-full h-64" src={poster} alt="" />
                {InStock && <span className={`absolute top-3 right-2 px-2 ${in_stock ? 'bg-green-500' : 'bg-red-500'} bg-opacity-90 text-white rounded`}>{in_stock ? "in_stock" : 'out_stock'}</span>}
            </Link>
            <div className="p-5">
                <Link to={`/products/${id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

                <div className="flex items-center my-2">
                    <ProductRating rating={rating} />
                </div>

                <p className="flex justify-between items-center">
                    <span className="text-2xl dark:text-gray-200">
                        <span>$</span><span>{price}</span>
                    </span>
                    {!isInCart ? <button disabled = {in_stock?"":'disabled'} onClick={() => handleClick(item)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> : <button onClick={()=>removeFromCart(item)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button>}
                </p>
            </div>
        </div >
    )
}
