import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { getSingleProductData } from "../redux/product/productAction";
import Rating from '@mui/material/Rating';
import { cartPostData } from "../redux/cart/cartAction";
import { ToastContainer, toast } from "react-toastify";
import { Navbar } from "./Navbar";
import { updateUserInfoData } from "../redux/auth/authAction";

export const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const { isAuthenticated, userAuth } = useSelector((store) => store.auth);
 

  const { singleProductData, proError, proLoading } = useSelector((store) => store.products)

  const getData = () => {
    dispatch(getSingleProductData(id));
  }

  const handlePostCart = (e) => {

    dispatch(cartPostData({ ...singleProductData, qty: 1 }));
    dispatch(
      updateUserInfoData(
        { ...userAuth, cart_ids: [...userAuth.cart_ids, singleProductData._id] },
        userAuth._id
      )
    );
  }


  const rate = singleProductData.rating;

  return proLoading ? <img src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif" alt="loading..." /> : proError ? <img src="https://www.betterliving.co.in/images/404.gif" alt="Error" /> : (
    <>
      <Navbar />
      <h1>ProductDetails</h1>
      <Box sx={{ mt: 10 }}>

      </Box>

      <Box
        sx={{
          display: "flex",
          width: "70%",
          border: 0,
          ml: 25,
          mt: 4,
          p: 4,
          justifyContent: "center",
          gap: "100px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: 2,
        }}
      >
        <Box sx={{ border: 0, width: "50%", borderRadius: 3 }}>
          <img
            style={{ width: "100%", borderRadius: 9 }}
            src={singleProductData.product_image}
          />
        </Box>
        <Box
          sx={{
            border: 0,
            width: "50%",
            borderRadius: 3,
            pl: 4,
            boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          }}
        >
          <h2 style={{ marginTop: "10px" }}>{singleProductData.product_name}</h2>


          <Box sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center", border: 0,
            width: "90%"
          }}>
            <h3 style={{}}>Category</h3>
            <Typography
              sx={{ height: "auto" }}
              variant="h6"
              color="text.secondary"
            >
              {singleProductData.category}
            </Typography></Box>

          <Box
            sx={{
              '& > legend': { mt: 2 },
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center", border: 0,
              width: "90%"
            }}
          >
            <h2 style={{ marginTop: "10px" }}>Rating</h2>

            <Rating name="read-only" value={rate} readOnly />

          </Box>
          <h2 style={{ marginTop: "10px" }}>{singleProductData.price}/-</h2>





          <Box sx={{
            mt: 3, justifyContent: "space-evently",
            alignItems: "center", border: 0,
            width: "90%"
          }}>
            <Button
              sx={[
                {
                  boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                  m: 1,
                  color: "#ffffff",
                  bgcolor: "#fd9f12",
                  fontSize: "12px",
                  pl: 3,
                  pr: 3
                },
                () => ({
                  "&:hover": {
                    color: "#121212", bgcolor: "#ffa41c", fontSize: "12px"
                  }
                }),
              ]}
              value="asc"
              id="asc"
              onClick={() => {
                {
                  !isAuthenticated ? navigate("/SignIn") :
                    navigate("/payment")
                }
              }}
              variant="text"
            >
              Buy Now
            </Button>
            <Button
              sx={[
                {
                  boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                  m: 1,
                  color: "#ffffff",
                  bgcolor: "#ed3b58",
                  fontSize: "12px", ml: 3
                },
                () => ({
                  "&:hover": {
                    color: "#121212", bgcolor: "#f36c82", fontSize: "12px"
                  }
                }),
              ]}
              value="asc"
              id="asc"
              onClick={(e) => {
                {
                  !isAuthenticated ? navigate("/SignIn") :
                    handlePostCart(e)
                }

              }}
              variant="text"
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </>
  )
}