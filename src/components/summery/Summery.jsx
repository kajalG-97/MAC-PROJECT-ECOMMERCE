import { Box } from "@mui/material"
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/cart/cartAction";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { getSingleData, getuserData } from "../../redux/user/userAction";
import { TotalPrice } from "../TotalPrice";
import { CartCard } from "../Cart/CartCard";
import { StepNav } from "../step-nav/StepNav";

export const Summery = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { cartList, Loading, Error } = useSelector((store) => store.cart)

    const [checked, setChecked] = useState(false);
  
    useEffect(() => {
        getCart();
        getData();
    }, []);

    const getCart = () => {
        dispatch(getCartData());
    
    }

    const getData = () => {
        dispatch(getSingleData(id));
    }

    const { single } = useSelector((store) => store.user);

    
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
        <StepNav/>
        <h2>Summery</h2>
            <Box sx={{ width: "60%", m: "auto", mt: 5, p: 4, border: 0, boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`, display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "60%", border: 0 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", pl: 2 }} >

                        <h4 style={{ color: "#636060" }}>Product Details</h4>
                    </Box>
                    <hr />
                    <Box>
                        {cartList && cartList.map((event) => {
                            return <CartCard key={event.id} data={event} />
                        })}

                    </Box>
                    <Box >
                        <Box sx={{ display: "flex", justifyContent: "space-between", pl: 2 }}>
                            <h4 style={{ color: "#636060" }}>Delivery Address</h4>
                        </Box>
                        <hr />
                        <br />

                        <Box sx={{ bgcolor: "#e7eeff", width: "82%", m: "auto", borderRadius: 3, p: 2, mb: 5 }}>
                            <h2 style={{ textAlign: "left" }}>{single.name}</h2>
                            <p style={{ textAlign: "left" }}>

                                {single.address}
                            </p>
                            <p style={{ textAlign: "left" }}>{single.mobile}</p>

                        </Box>

                    </Box>
                    <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", pl: 2 }}>
                            <h4 style={{ color: "#636060" }}>Payment Method</h4>
                        </Box>
                        <hr />
                        <br />
                        <Box sx={{  width: "82%", boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`, m: "auto", borderRadius: 3, p: 2, mb: 3, border: 0, lineHeight: 2 }}>
                        <Box sx={{ display: "flex", }}>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <h4>Pay on Delivery</h4></Box>

                        <h5>Pay digitally with sms link. Cash may not be accepted in COVID restricted area</h5>
                    </Box>
                    </Box>


                </Box>
                <TotalPrice cartList={cartList} />
            </Box>
        </>
    )
}