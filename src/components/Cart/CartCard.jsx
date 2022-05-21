import { Box, Button } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';



import { cartDeleteData, cartPatchData, getCartData } from "../../redux/cart/cartAction";

import { useEffect, useState } from "react";


import * as React from 'react';


import ButtonGroup from '@mui/material/ButtonGroup';



import { useDispatch, useSelector } from "react-redux";



export const CartCard = ({ data }) => {


    const { isAuthenticated, userAuth } = useSelector((store) => store.auth);

    const [size, setSize] = useState(data.length);


    const [count, setCount] = React.useState(data.qty);


    const dispatch = useDispatch();

    useEffect(() => {
        patchData();

        getCart();

    }, [size, count]);


    const cartDelete = (e) => {
        dispatch(cartDeleteData(data._id))
        console.log('data', data);
        setSize(size - 1);

        // dispatch(
        //     updateUserInfoData(
        //         { ...userAuth, cart_ids: [...userAuth.cart_ids, data._id] },
        //         userAuth._id
        //     )
        // );
    }




    const getCart = () => {
        dispatch(getCartData(userAuth._id));

    }

    const patchData = () => {
        dispatch(cartPatchData(data._id, { ...data, qty: count }))
    }


    const handleChangeCount = (e) => {
        if (e.target.id === "plus") {
            setCount(count + 1);

            patchData()
        }
        if (e.target.id === "minus" && count > 1) {
            setCount(count - 1);

            patchData()
        }

    }


    sessionStorage.setItem("qtySize", JSON.stringify(size));
    return (
        <Box sx={{ display: 'flex', p: 3, justifyContent: 'space-around', width: "90%", m: "auto", mb: 3, boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>
            <Box sx={{ flex: 1.5, border: 0, height: "70%", mt: 2 }} >

                <img style={{ width: "100%" }} src={data.product_image} />

            </Box>

            <Box sx={{ flex: 5, height: "150px", lineHeight: "8px", textAlign: "left", pl: 5 }}>


                <h5>{data.product_name}</h5>

                <p>QTY:{data.qty}</p>

                <h5>{data.price * data.qty}</h5>

                <Button onClick={cartDelete} variant="text" size="large" startIcon={<DeleteIcon />}>Remove</Button>

            </Box>

            <Box sx={{ flex: 1 }}>


                {/* <GroupSizesColors item={data}/> */}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                            mt: 3
                        },
                    }}
                >
                    <ButtonGroup size="small" aria-label="small button group">
                        <Button onClick={handleChangeCount} id="minus" key="one"> - </Button>
                        <Button key="two">{count}</Button>
                        <Button onClick={handleChangeCount} id="plus" key="three">+</Button>
                    </ButtonGroup>

                </Box>
            </Box>
        </Box>
    )
}