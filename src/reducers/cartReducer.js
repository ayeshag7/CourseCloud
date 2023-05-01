export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList: payload.cartList}
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.cartList}
        case "UPDATE_TOTAL":
            return {...state, total: payload.total}
        case "CLEAR_CART":
            return {...state, total: payload.total, cartList: payload.cartList}
        default:
            throw new Error("Case not found!") 
    }
}
