import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";

export const ProductCard = ({product}) => {

    const {id, name, overview, poster, price, rating, best_seller} = product;

    const {cartList, addToCart, removeFromCart} = useCart();

    const [productInCart, setProductInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = cartList.find(element => element.id === id);

    if (isProductInCart) {
        setProductInCart(true)
    } else {
        setProductInCart(false)
    }

  }, [cartList, id])

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative" >
            { best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span> }
            <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
            <Link to={`/products/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                <Rating rating={rating} />
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                {/* Add to Cart or Remove from Cart button */}
                {productInCart ? (<button onClick={() => removeFromCart(product)} className="border border-gray-200 dark:border-gray-800 rounded-md bg-red-600 text-white p-2">Remove From Cart</button>) : 
                (<button onClick={() => addToCart(product)} className="border border-gray-200 dark:border-gray-800 rounded-md bg-logo text-white p-2">Add to Cart</button>)}
            </p>
        </div>
    </div>
  )
}
