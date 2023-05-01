import { useCart } from "../../../context"
import { Link } from "react-router-dom"

export const CartCard = ({product}) => {

  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-wrap justify-between border border-gray-200 rounded-lg shadow-md dark:border-gray-900 max-w-4xl m-auto p-4 mb-5 ">
      <div className="flex">
          <Link to={`products/${product.id}`}>
            <img className="w-36 rounded" src={product.poster} alt={product.name} />
          </Link>
          <div className="">
            <Link to={`products/${product.id}`}>
              <p className="text-xl ml-4 mt-4 dark:text-white">{product.name}</p>
            </Link>            
            <button onClick={() => removeFromCart(product)} className="text-sm bg-red-600 border border-gray-200 dark:border-gray-900 py-1 px-2 rounded-lg ml-4 mt-2 text-white">Remove</button>
          </div>
      </div>
      <div className="text-xl mt-6 mr-2 dark:text-white">
        <span>${product.price}</span>
      </div>
    </div>
  )
}