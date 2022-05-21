import axios from "axios"

export const PRODUCT_LOADING = "PRODUCT_LOADING"

export const PRODUCT_DATA = "PRODUCT_DATA"

export const PRODUCT_ERROR = "PRODUCT_ERROR"

export const SINGLE_PRODUCT = "SINGLE_PRODUCT"

export const singleProduct = (payload) => ({ type: SINGLE_PRODUCT, payload })

export const productLoading = () => ({ type: "PRODUCT_LOADING" })

export const productError = () => ({ type: "PRODUCT_ERROR" })

export const productData = (payload) => ({ type: PRODUCT_DATA, payload });

export const getProductData = (catFilter,page) => (dispatch) => {

    dispatch(productLoading());

    axios.get(`https://mac-project-ecommerce.herokuapp.com/products?category=${catFilter}&page=${page}`).then(({ data }) => {
     
    dispatch(productData(data))})
    
    .catch((err) => dispatch(productError()));
}

export const getSingleProductData = (_id) => (dispatch) => {

    dispatch(productLoading());

    axios.get(`https://mac-project-ecommerce.herokuapp.com/products/${_id}`).then(({ data }) => {
         
    dispatch(singleProduct(data))})
        .catch((err) => dispatch(productError()));
}