import { USER_DATA, USER_ERROR, USER_LOADING,SINGLE_DATA } from "./userAction"

const initialState = {
    user: [],
    Loading: false,
    Error: false,
    single:{}
}

export const userReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case USER_DATA: return { ...store, user: payload, Loading: false, Error: false }

        case SINGLE_DATA: return { ...store, single: payload, Loading: false, Error: false }

        case USER_ERROR: return { ...store, Loading: false, Error: true }

        case USER_LOADING: return { ...store, Loading: true, Error: false }

        default: return store;
    }
}