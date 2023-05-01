import { Link } from "react-router-dom";

export const DashboardEmpty = () => {
    return (
      <section className="text-xl text-center max-w-4xl mx-auto my-16 py-5 dark:text-white border shadow-md border-gray-200 dark:border-gray-700 rounded-md">
          <div className="my-5">
              <p className="bi bi-cart text-logo text-7xl mb-5"></p>
              <p>Your order dashboard looks empty!</p>
              <p>Add courses to your cart from our store collection.</p>
          </div>
          <Link to="/products" type="button" className="text-white bg-logo rounded-lg text-lg px-5 py-2.5 mr-2 mt-4 mb-5 dark:bg-logo">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
      </section>  
    )
}
