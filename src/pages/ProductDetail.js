import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components/Elements/Rating";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
    const params = useParams();

    const [course, setCourse] = useState({});

    useEffect(() => {
        async function fetchCourseDetail () {
            const data = await getProduct(params.id);
            setCourse(data);
        }
        fetchCourseDetail();
    }, [params.id])

    const {id, name, overview, long_description, price, poster, rating, in_stock, size, best_seller} = course;

    useTitle(`${name}`)

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
    <main>
        <section>
          <div className="flex flex-wrap justify-around items-center mt-2 mb-8">
            <div className="max-w-xl">
              <img className="rounded" src={poster} alt={name} />
            </div>
            <div className="max-w-xl my-3">
              <h1 className="mt-10 mb-5 text-4xl font-bold text-gray-900 dark:text-white">{name}</h1>
              <p className="mb-5 text-lg text-gray-900 dark:text-white">{overview}</p>
              <div className="flex justify-start gap-8 items-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    <span className="mr-1">$</span>
                    <span className="">{price}</span>
                </p>
                <p className="my-3"> 
                    <span>
                    <Rating rating={rating} />
                    </span>
                </p>
              </div>
              <p className="my-8 select-none">
                { best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> }
                { in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> }
                { !in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> }
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{size} MB</span>
              </p>
              <p className="my-6">
                {productInCart ? (<button onClick={() => removeFromCart(course)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg ${in_stock ? "" : "cursor-not-allowed"}`} disabled={ in_stock ? "" : "disabled" }>Remove From Cart<i className="ml-1 bi bi-plus-lg"></i></button>) : 
                (<button onClick={() => addToCart(course)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-logo rounded-lg ${in_stock ? "" : "cursor-not-allowed"}`} disabled={ in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)}
                
              </p>
              <p className="text-lg text-gray-900 dark:text-white">
                {overview} {long_description}
              </p>
            </div>
          </div>
        </section>
    </main>
  )
}
