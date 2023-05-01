import { Link } from "react-router-dom"

export const OrderFail = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 border border-gray-200 shadow-md dark:text-white dark:border-gray-700 rounded-md">
        <div className="my-5">
            <p className="bi bi-exclamation-circle text-red-600 text-7xl mb-5"></p>
            <p>Payment failed, please try again!</p>     
        </div>
        <div className="my-8">
            <p className="mb-2">Your order is not confirmed.</p>
            <p>Contact us <span className="italic underline text-lg">coursecloud@org.com</span> for support.</p>
        </div>
        <Link to="/cart" type="button" className="text-white bg-logo rounded-lg text-lg px-5 py-2.5 mr-2 mb-4 dark:bg-logo focus:outline-none">Check Cart Again<i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
