import { Link } from "react-router-dom"

export const OrderSuccess = ({data}) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-white border shadow-md border-gray-200 dark:border-gray-700 rounded-md">
        <div className="mt-4 mb-8">
            <p className="bi bi-check-circle text-green-500 text-7xl mb-5"></p>
            <p>Thank you user for the order! Your order is confirmed.</p>
                      
        </div>
        <div className="my-5">
            <p className="mb-2">Your Order ID: {data.id}</p>
            <p>Please check your email <span className="italic underline text-base">{data.email}</span> for the course.</p>
            <p className="mt-5 mb-8">Payment ID: {Math.floor(Math.random() * 10000000)}</p>
        </div> 
        <Link to="/products" type="button" className="text-white bg-logo rounded-lg text-lg px-5 py-2.5 mr-2 mb-4 dark:bg-logo">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
