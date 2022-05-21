import { Box } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { getuserData, userDeleteData } from "../../redux/user/userAction";
import { TotalPrice } from "../TotalPrice";
import { getCartData } from "../../redux/cart/cartAction";
import { StepNav } from "../step-nav/StepNav";
import DeleteIcon from '@mui/icons-material/Delete';


export const CheckOut = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { userAuth } = useSelector((store) => store.auth);

    const ID = userAuth._id;

    useEffect(() => {
        getData(); getCart();
    }, []);

    const getData = () => {
        dispatch(getuserData(ID));
    }

    const { user, Loading, Error } = useSelector((store) => store.user);

    const { cartList } = useSelector((store) => store.cart);

    const getCart = () => {
        dispatch(getCartData());
    }

    return Loading ? (
        <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
    ) : Error ? (
        <img
            src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
            alt="Oops something went wrong"
        />
    ) : (
        <>
            <StepNav />
            <h2>Checkout</h2>
            <Box sx={{ width: "70%", m: "auto", mt: 5, p: 4, border: 0, boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`, display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "65%", border: 0 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", pl: 2 }}>
                        <h3>Select Delivery Address</h3>
                        <h4 onClick={() => navigate("/addAddress")} style={{ color: "#e00e9a", cursor: "pointer" }}>+ ADD NEW ADDRESS</h4>
                    </Box>
                    <hr />

                    {user && user.map((user) => {


                        return <Box key={user.id} sx={{ bgcolor: "#e7eeff", width: "72%", m: "auto", borderRadius: 3, pl: 5, pr: 3, pt: 1, mb: 3, border: 0, lineHeight: 1 }}>
                            <h2 style={{ textAlign: "left" }}>{user.name}</h2>
                            <p style={{ textAlign: "left" }}>

                                {user.address}
                            </p>
                            <p style={{ textAlign: "left" }}>{user.mobile}</p>
                            <Box sx={{ justifyContent: "space-between", display: "flex", width: "60%", mb: -3 }}>
                                <Button variant="outlined" sx={{}} color="secondary" startIcon={<EditIcon />} onClick={(e) => {

                                    navigate(`/editAddress/${user._id}`)
                                }}>Edit</Button>
                                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => dispatch(userDeleteData(user._id))}>
                                    Delete
                                </Button></Box>

                            <br />
                            <Button
                                sx={[
                                    {
                                        boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                        m: 1,
                                        mt: 3,
                                        color: "#ffffff",
                                        bgcolor: "#ed3b58", pl: 9, pr: 9
                                    },
                                    () => ({
                                        "&:hover": {
                                            color: "#fafafa", bgcolor: "#f36c82"
                                        }
                                    }),
                                ]}
                                value="desc"
                                onClick={() => navigate(`/summery/${user._id}`)}
                                variant="text"
                            >
                                Deliver to this Address
                            </Button>
                        </Box>
                    })}
                </Box>
                <TotalPrice cartList={cartList} />
            </Box>
        </>
    )
}