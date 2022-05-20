import { PRODUCT_DATA, PRODUCT_ERROR, PRODUCT_LOADING, SINGLE_PRODUCT } from "./productAction"

const initialState = {
    productList: [],
    proLoading: false,
    proError: false,
    singleProductData:{}
}

export const productReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_DATA: return { ...store, productList: payload, proLoading: false, proError: false }

        case PRODUCT_ERROR: return { ...store, proLoading: false, proError: true }

        case PRODUCT_LOADING: return { ...store, proLoading: true, proError: false }

        case SINGLE_PRODUCT: return { ...store, singleProductData: payload, proLoading: false, proError: false }

        default: return store;
    }
}