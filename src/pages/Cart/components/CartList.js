import { useState } from "react"
import { useCart } from "../../../context";
import { CartCard } from "./CartCard"
import { CartCheckout } from "./CartCheckout";

export const CartList = () => {

  const [checkOut, setCheckOut] = useState(false);

  const { cartList, total } = useCart();

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-8">
          My Cart
        </p>
      </section>
      
      <section>
        { cartList.map((product) => (
            <CartCard key={product.id} product={product} />
        )) }
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="text-xl font-semibold">Total Amount:</span>
            <span className="text-xl">${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button onClick={() => setCheckOut(!checkOut)} type="button" className="text-white bg-logo font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {checkOut && <CartCheckout total={total} checkOut={checkOut} setCheckOut={setCheckOut}/>}
    </>
  )
}