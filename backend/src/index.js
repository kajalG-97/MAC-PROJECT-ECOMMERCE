const express = require('express');

const router = require('express').Router();

const connect = require('./configs/db');

const { register, login } = require("./controllers/authentication.controller");


const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");

const cartController = require("./controllers/cart.controller");

const addressController = require("./controllers/address.controller");

const search = require("./controllers/search.controller");

const {signUp,verifyOtp} = require("./controllers/auth.controller");

const userRouter = require("./router/user.router")
// const cookieParser = require("cookie-parser")
const cors = require('cors');

const port = process.env.PORT || 5300;

const app = express();

app.use(cors());

app.use(express.json());

// app.use(cookieParser());

app.use("/users", userController);


app.use("/carts", cartController);


app.use("/products", productController);


app.use("/product_name",search);

// app.use("/user",userRouter);

app.use("/address",addressController)

// app.use("/signup/verify",verifyOtp);

app.post("/register", register);

app.post("/login", login);



app.listen(port, async () => {
    try {
        await connect();
        console.log(`running on port ${port}`);

    } catch (err) {
        console.log('err', err.message);

    }
});