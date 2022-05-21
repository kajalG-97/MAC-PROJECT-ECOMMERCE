import axios from "axios"

export const CART_LOADING = "CART_LOADING"

export const CART_DATA = "CART_DATA"

export const CART_ERROR = "CART_ERROR"

export const SINGLE_CART = "SINGLE_CART"

export const singleCart = (payload) => ({ type: SINGLE_CART, payload })

export const cartLoading = () => ({ type: "CART_LOADING" })

export const cartError = () => ({ type: "CART_ERROR" })

export const cartData = (payload) => ({ type: CART_DATA, payload });

export const getCartData = (_id) => (dispatch) => {
    
    dispatch(cartLoading());

    axios.get(`https://mac-project-ecommerce.herokuapp.com/users/${_id}`).then(({ data }) =>{ 
    console.log('userAuth_id', _id);

    dispatch(cartData(data.cart_ids))
})
        .catch((err) => dispatch(cartError()));
}

export const getSinglecartData = (_id) => (dispatch) => {

    dispatch(cartLoading());

    axios.get(`https://mac-project-ecommerce.herokuapp.com/carts/${_id}`).then(({ data }) => dispatch(singleCart(data)))
        .catch((err) => dispatch(cartError()));
}

export const cartPostData = (data) => (dispatch) => {
    dispatch(cartLoading());
    axios.post(`https://mac-project-ecommerce.herokuapp.com/carts`, data).then(({ data }) => {

        alert("Product has been successfully Added!")
     
    })
        .catch((err) => {
            dispatch(cartError())
            toast.error("Go to Cart!", {
                position: "top-center",
            });
        });
}

export const cartPatchData = (_id, data) => (dispatch) => {
    dispatch(cartLoading());
    axios.patch(`https://mac-project-ecommerce.herokuapp.com/carts/${_id}`, data).then(({ data }) => {
        getCartData()
    })
        .catch((err) => dispatch(cartError()));
}

export const cartDeleteData = (_id) => (dispatch) => {
    dispatch(cartLoading());
    axios.delete(`https://mac-project-ecommerce.herokuapp.com/carts/${_id}`).then(({ data }) => {

        getCartData()
    })
        .catch((err) => dispatch(cartError()));
}
