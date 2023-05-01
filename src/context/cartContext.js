import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartInitialState = {
    total: 0,
    cartList: []
}


export const CartContext = createContext(cartInitialState);


export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartList: updatedCartList
            }
        })
    };

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(element => element.id !== product.id);
        updateTotal(updatedCartList);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                cartList: updatedCartList
            }
        })
    };

    const updateTotal = (products) => {
        let total = 0
        products.forEach(product => {
            total = total + product.price
        })
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        })
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                total: 0,
                cartList: []
            }
        })
    };

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        updateTotal,
        clearCart
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    return useContext(CartContext)
};
