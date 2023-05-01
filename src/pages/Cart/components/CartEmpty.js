import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-16 py-5 dark:text-slate-100 border shadow-md dark:border-gray-900 rounded">
        <div className="my-5">
            <p className="bi bi-cart text-logo text-7xl mb-8"></p>
            <p>Your cart looks empty!</p>
            <p>Add courses to your cart from our collection.</p>
        </div>
        <Link to="/products" type="button" className="text-white bg-logo rounded-lg text-lg px-5 py-2.5 mt-6 mr-2 mb-5 dark:bg-logo focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
