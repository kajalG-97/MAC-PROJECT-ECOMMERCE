import axios from "axios";

export const AUTH_LOGIN = "AUTH_LOGIN";

export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const AUTH_REGISTER = "AUTH_REGISTER";

export const AUTH_LOADING = "AUTH_LOADING";

export const AUTH_ERROR = "AUTH_ERROR";

export const authLogin = (payload) => ({ type: AUTH_LOGIN, payload });

export const authLogout = () => ({ type: AUTH_LOGOUT });

export const authRegister = (payload) => ({ type: AUTH_REGISTER, payload });

export const authLoading = () => ({ type: AUTH_LOADING });

export const authError = () => ({ type: AUTH_ERROR });

export const postAuthLogin = (data, navigate, toast) => (dispatch) => {

    dispatch(authLoading);

    axios.post(`https://mac-project-ecommerce.herokuapp.com/login`, data).then(({ data }) => {
       
        dispatch(authLogin(data.user))
        console.log('data', data);

        sessionStorage.setItem("userAuthData", JSON.stringify(data.user));

        sessionStorage.setItem("userAuthenticated", true);

        alert("Logged in Successfully")

        setTimeout(() => {
            navigate("/");
        }, 100)
    })
        .catch((err) => {
            dispatch(authError())
            alert("Please check your email or password")
        });

}

export const updateUserInfoData = (data,_id) => (dispatch) => {

    dispatch(authLoading);

    axios.patch(`https://mac-project-ecommerce.herokuapp.com/users/${_id}`, data).then(({ data }) => {
       
        dispatch(authLogin(data))

    })
        .catch((err) => {
            dispatch(authError())
        });

}


export const postAuthRegister = (data, navigate, toast) => (dispatch) => {

    dispatch(authLoading);

    axios.post(`https://mac-project-ecommerce.herokuapp.com/register`, data).then(({ data }) => {

        sessionStorage.setItem("userRegData", JSON.stringify(data.user));

        alert("Registration Successfull!")

        navigate("/SignIn")
    })

        .catch((err) => {
            dispatch(authError())
            alert("Please check your email or password")
        });

}