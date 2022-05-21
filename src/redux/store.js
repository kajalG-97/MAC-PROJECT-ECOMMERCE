// import { createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { productReducer } from "./product/productReducer";
import { cartReducer } from "./cart/cartReducer";
import { userReducer } from "./user/userReducer";
import { authReducer } from "./auth/authReducer";
import { createSlice } from '@reduxjs/toolkit'



const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    user:userReducer,
    auth:authReducer
});

export const store = createSlice(rootReducer, applyMiddleware(thunk));