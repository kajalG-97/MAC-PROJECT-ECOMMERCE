import { Box } from "@mui/material"
import { useSelector } from "react-redux";
import { StepNav } from "../step-nav/StepNav"
import { TotalPrice } from "../TotalPrice"

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



export const Payment = () => {

    const navigate = useNavigate();

    return (
        <>
            <StepNav />
            <Box sx={{ pt: 6 }}>
                {/* <Button variant="contained" color="success">
        Congratulations


      </Button> */}


                <h2>Your Order Placed Succesfully</h2>

                <Box sx={{ width: "30%", mt: 5, display: "inline-block", border: 0 }}>
                    <Button
                        sx={[
                            {
                                boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                m: 1,
                                mt: 3,
                                color: "#ffffff",
                                bgcolor: "#fd9f12", pl: 6, pr: 6
                            },
                            () => ({
                                "&:hover": {
                                    color: "#fafafa", bgcolor: "#f36c82"
                                }
                            }),
                        ]}
                        value="desc"
                        onClick={() => navigate("/order")}
                        variant="text"
                    >
                        See Your Order
                    </Button>
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

            </Box>
        </>
    )
}