import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";
import { createOrder, getUser } from "../../../services";
import { toast } from "react-toastify";

export const CartCheckout = ({total, checkOut, setCheckOut}) => {

    const [user, setUser] = useState("");

    const {cartList, clearCart} = useCart();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            try {
                const data = await getUser();
                setUser(data);
            } catch(error) {
                toast.error(error.message, { closeButton: true, position: "bottom-center" });
            }
        }
        fetchData();
    }, []);

    const handleOrderSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await createOrder(cartList, total, user);
            clearCart();
            navigate("/order-summary", { state: {data: data, status: true }})
        } catch(error) {
            toast.error(error.message, {closeButton: true, position: "bottom-center"})
            navigate("/order-summary", {state: {status: false}})
        }
    };

  return (
    <section>
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50`}></div>
            <div id="authentication-modal" tabIndex="-1" className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog" >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
                    <div className="relative bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-700">

                        <button onClick={() => setCheckOut(!checkOut)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-8 text-xl font-medium text-gray-900 dark:text-white">
                                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
                            </h3>
                            <form onSubmit={handleOrderSubmit} className="space-y-6" >
                                
                                {/* Name */}
                                <div className="flex flex-col mb-2">
                                    <div className="flex relative mb-2">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-album" viewBox="0 0 16 16">
                                                <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/>
                                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                            </svg>
                                        </span>
                                        <input type="text" name="name" id="sign-in-name" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Name" value={user.name || "Undefined"}/>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col mb-2">
                                    <div className="flex relative mb-2">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type="text" name="email" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Email" value={user.email || "backup@example.com"}/>
                                    </div>
                                </div>

                                {/* Card Number */}
                                <div className="flex flex-col mb-2">
                                    <div className="flex relative mb-2">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ol" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                                                <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                                            </svg>
                                        </span>
                                        <input value={2345678} type="text" name="cardNumber" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Card Number: 42156254625"/>
                                    </div>
                                </div>
                                
                                
                                {/* Expiry Date */}
                                <div>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date:</label>
                                    <div className="flex flex-wrap">
                                        <input type="number" name="month" id="month" className="w-20 p-2.5 bg-white border rounded-lg border-gray-300 text-gray-500 shadow-sm text-sm" value="03" disabled required="" />
                                        <input type="number" name="year" id="year" className="w-20 p-2.5 ml-3 bg-white border rounded-lg border-gray-300 text-gray-500 shadow-sm text-sm" value="27" disabled required="" />
                                    </div>
                                </div>

                                {/* Security Code */}
                                <div className="flex flex-col">
                                    <div className="flex relative mb-2">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-fill-exclamation" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.55 8.502L7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0zM8.002 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                            </svg>
                                        </span>
                                        <input value={525} type="text" name="securityCode" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Secuirty Code: 525"/>
                                    </div>
                                </div>

                                <p className="text-3xl font-semibold text-center">
                                    <span className="text-gray-900 py-2 px-3 rounded-lg border border-gray-200 dark:text-white dark:border-gray-700">${total}</span>
                                </p>

                                {/* Pay/Submit Button */}
                                <button type="submit" className="w-full text-white bg-logo font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-logo" >
                                    <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}
