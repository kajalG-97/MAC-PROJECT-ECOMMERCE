import { CART_DATA, CART_ERROR, CART_LOADING, SINGLE_CART } from "./cartAction"

const initialState = {
    cartList: [],
    Loading: false,
    Error: false,
    singleCartData: {},

}

export const cartReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case CART_DATA: return { ...store, cartList: payload, Loading: false, Error: false }

        case CART_ERROR: return { ...store, Loading: false, Error: true }

        case CART_LOADING: return { ...store, Loading: true, Error: false }

        case SINGLE_CART: return { ...store, singleCartData: payload.carts, Loading: false, Error: false }

        default: return store;
    }
}