import { Link } from "react-router-dom"

export const DashboardCard = ({order}) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border border-gray-200 shadow-md rounded-md dark:border-gray-700">
        <div className="flex justify-between text-base m-2 font-bold dark:text-white">
            <span>Order Id: {order.id}</span>
            <span>Total: ${order.amount}</span>
        </div>
        { order.cartList.map((product) => (
            <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                <div className="flex">
                    <Link to={`/products/${product.id}`}>
                        <img className="w-36 rounded" src={product.poster} alt={product.name} />
                    </Link>
                    <div className="">
                        <Link to={`/products/${product.id}`}>
                            <p className="text-xl ml-2 dark:text-white">{product.name}</p>
                        </Link>
                        <div className="text-xl m-2 dark:text-white">
                            <span>${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )) }
    </div>
  )
}