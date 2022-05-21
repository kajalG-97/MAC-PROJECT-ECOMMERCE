import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";

import { ProductDetails } from "./ProductDetails";

import { ProductsPage } from "./ProductPage";

import { NotFoundPage } from "./NotFoundPage";
import { CategoryPage } from "./Category";
import { CartPage } from "./Cart/CartPage";
import { CheckOut } from "./CheckOut/CheckOut";
import { EditAddress } from "./CheckOut/EditAddress";
import { AddAddress } from "./CheckOut/AddAddress";
import { Summery } from "./summery/Summery";
import { Payment } from "./Payment/Payment";

import { OTP } from "./login/OTP";
import { Register } from "./login/Register";
import { Login } from "./login/Login";
import { OrderPage } from "./Payment/Order";


export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/product" element={<ProductsPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/editAddress/:id" element={<EditAddress />} />
                <Route path="/addAddress" element={<AddAddress />} />
                <Route path="/summery/:id" element={<Summery />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/OTP" element={<OTP />} />
                <Route path="/SignIn" element={<Login />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </>
    )
}