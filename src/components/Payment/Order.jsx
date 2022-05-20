import { Box } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/cart/cartAction";

import Button from '@mui/material/Button';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { getSingleData, getuserData } from "../../redux/user/userAction";
import { TotalPrice } from "../TotalPrice";
import { CartCard } from "../Cart/CartCard";
import { StepNav } from "../step-nav/StepNav";

export const OrderPage = () => {

const navigate = useNavigate();

    const dispatch = useDispatch();

    const { cartList, Loading, Error } = useSelector((store) => store.cart)


    useEffect(() => {
        getCart();
       
    }, []);

    const getCart = () => {
        dispatch(getCartData());
    
    }

    return (
        <>
            <Box>
                <Box>
                    <h3>Your Orders</h3>
                </Box>
                <Box>  {cartList && cartList.map((data) => {


                    return <Box key={data.id} sx={{ display: 'flex', p: 3, justifyContent: 'space-around', width: "40%", m: "auto", mb: 3, boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>


                        <Box sx={{ flex: 1.5, border: 0, height: "70%", mt: 2 }} >

                            <img style={{ width: "80%" }} src={data.product_image} />

                        </Box>

                        <Box sx={{ flex: 5, height: "150px", lineHeight: "8px", textAlign: "left", pl: 5 }}>


                            <h4>{data.product_name}</h4>

                            <p>QTY:{data.qty}</p>

                            <h5>{data.price * data.qty}</h5>

                        </Box>


                    </Box>
                })}
                </Box>
                <Button
                        sx={[
                            {
                                boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                m: 1,
                                mt: 3,
                                color: "#ffffff",
                                bgcolor: "#ed3b58", pl: 6, pr: 6
                            },
                            () => ({
                                "&:hover": {
                                    color: "#fafafa", bgcolor: "#f36c82"
                                }
                            }),
                        ]}
                        value="desc"
                        onClick={() => navigate("/product")}
                        variant="text"
                    >
                        Continue Your shoping
                    </Button>
            </Box>
        </>
    )
}