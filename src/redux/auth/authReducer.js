import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from "./authAction"

const USERDATA = JSON.parse(sessionStorage.getItem('userAuthData'))

const isAuth = sessionStorage.getItem('userAuthenticated')

const initialState = {

    loading: false,
    error: false,
    userAuth: USERDATA || {},
    isAuthenticated: isAuth || false
}

export const authReducer = (store = initialState, { type, payload }) => {
    switch (type) {

        case AUTH_ERROR: return { ...store, loading: false, error: true }

        case AUTH_LOADING: return { ...store, loading: true, error: false }

        case AUTH_LOGIN: return { ...store, userAuth: payload, loading: false, error: false, isAuthenticated: true }

        case AUTH_LOGOUT: return { ...initialState,USERDATA:sessionStorage.removeItem('userAuthData'),isAuth: sessionStorage.removeItem('userAuthenticated')}

        default: return store;
    }
}