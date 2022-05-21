import { Box } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/cart/cartAction";
import { CartCard } from "./CartCard"
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from "react-router-dom";



export const CartItems = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { isAuthenticated, userAuth } = useSelector((store) => store.auth);
    console.log('userAuth', userAuth);


    if (!isAuthenticated) {
        return <Navigate to="/SignIn" />
    }

    const { cartList, Loading, Error } = useSelector((store) => store.cart)

    useEffect(() => {
        getCart();
    }, []);

    const getCart = () => {
        dispatch(getCartData(userAuth._id));
    }

    let total = 0;
    
    return (
        //  Loading ? (
        //     <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
        // ) :
        //  Error ? (
        //     <img
        //         src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
        //         alt="Oops something went wrong"
        //     />
        // ) : 
        // (
        <>
            <Box sx={{ width: "60%", m: "auto", mt: 5, p: 4, border: 0, boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`, display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "60%", border: 0 }}>
                    <Box sx={{ display: "flex", gap: 2, pl: 2 }}>
                        <h3>Cart</h3>
                        <h3 style={{ color: "#636060" }}>{cartList.length} Item</h3>
                    </Box>
                    <hr />
                    <Box>
                        {cartList && cartList.map((event) => {
                            return <CartCard key={event.id} data={event} />
                        })}

                    </Box>
                </Box>
                <Box sx={{ width: "30%", p: 2, border: 0, boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px' }}>
                    <h3>Price Details</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                        <h5>Total Product Price</h5>

                        {cartList && cartList.map((event) => {
                            total += event.price * event.qty;
                        })}
                        <h5>{total}</h5>

                    </Box>
                    <hr />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <h5>Order Total</h5>
                        <h5>{total}</h5>
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
                        onClick={() => navigate("/checkout")}
                        variant="text"
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </>
    )
}