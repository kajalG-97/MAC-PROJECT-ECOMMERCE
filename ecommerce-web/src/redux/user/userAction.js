import axios from "axios"
import { updateUserInfoData } from "../auth/authAction"

export const USER_LOADING = "USER_LOADING"

export const USER_DATA = "USER_DATA"

export const USER_ERROR = "USER_ERROR"

export const SINGLE_DATA = "SINGLE_DATA"

export const userLoading = () => ({ type: "USER_LOADING" })

export const userError = () => ({ type: "USER_ERROR" })


export const userData = (payload) => ({ type: USER_DATA, payload });

export const singleData = (payload) => ({ type: SINGLE_DATA, payload });

export const getuserData = (id) => (dispatch) => {

    dispatch(userLoading());

    axios.get(`https://mac-project-ecommerce.herokuapp.com/users/${id}`).then(({ data }) =>{ 
       
    dispatch(userData(data.address_ids))})
        .catch((err) => dispatch(userError()));
}

export const getSingleData = (_id) => (dispatch) => {

    dispatch(userLoading());

    axios.get(`https://mac-project-ecommerce.herokuapp.com/address/${_id}`).then(({ data }) => { dispatch(singleData(data)) })
        .catch((err) => dispatch(userError()));
}


export const userPostData = (data, navigate, userAuth) => (dispatch) => {
    dispatch(userLoading());
    axios.post(`https://mac-project-ecommerce.herokuapp.com/address`, data).then(({ data }) => {
        


        setTimeout(() => {
            alert("Address added!")
            navigate("/checkout")
        }, 500)

        dispatch(
            updateUserInfoData(
                { ...userAuth, address_ids: [...userAuth.address_ids, data._id] },
                userAuth._id
            )
        );
    })
        .catch((err) => {
            dispatch(userError())

        });
}

export const userPatchData = (_id, data, navigate) => (dispatch) => {
    dispatch(userLoading());
    axios.patch(`https://mac-project-ecommerce.herokuapp.com/address/${_id}`, data).then(({ data }) => {
        

        getuserData()
        setTimeout(() => {
            alert("Address edited !")
            navigate("/checkout")
        }, 1000)
    })
        .catch((err) => dispatch(userError()));
}

export const userDeleteData = (_id) => (dispatch) => {
    dispatch(userLoading());
    axios.delete(`https://mac-project-ecommerce.herokuapp.com/address/${_id}`).then(({ data }) => {
       
        getuserData()

    })
        .catch((err) => dispatch(userError()));
}
