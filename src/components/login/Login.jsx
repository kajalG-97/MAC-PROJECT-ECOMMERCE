import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { postAuthLogin } from "../../redux/auth/authAction";
import { Navbar } from "../Navbar"
import { ToastContainer, toast } from "react-toastify";
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

export const Login = () => {

    const { loading, error } = useSelector((store) => store.auth);


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [data, setData] = useState({

        email: "",
        password: "",

    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postAuthLogin(data, navigate, toast));
    }


    const {
        email,
        password,
    } = data;

    // loading ? (
    //     <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
    // ) : error ? (
    //     <img
    //         src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
    //         alt="Oops something went wrong"
    //     />
    // ) : 
    return (
        <Box sx={{ bgcolor: "#f8dcdf", height: "700px" }}>
            <Link to="/" style={{ textDecoration: "none" }}> <Typography variant="p" sx={{ m: "auto", pt: 3 }} component="h1" color="#570aa0">
                HappyMart
            </Typography></Link>

            <Box sx={{ width: "24%", borderRadius: "15px", height: "300px", bgcolor: "#ffffff", border: 0, p: 2, m: "auto", mt: 5, boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}>
                <h3>Sign In to save your order</h3>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { width: '28ch', border: 0 },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        id="email"
                        label="Enter email"
                        type="text"
                        autoComplete="current-name"
                        variant="standard"
                        value={email}
                        onChange={(e) => handleChange(e)}
                    />
                    <br /><br />
                    <TextField
                        id="password"
                        label="Enter password"
                        type="password"
                        autoComplete="current-name"
                        variant="standard"
                        value={password}
                        onChange={(e) => handleChange(e)}
                    />
                    <LoadingButton
                        sx={[
                            {
                                boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                m: 1,
                                mt: 5,
                                color: "#ffffff",
                                bgcolor: "#ed3b58", pl: 5, pr: 5
                            },
                            () => ({
                                "&:hover": {
                                    color: "#fafafa", bgcolor: "#f36c82"
                                }
                            }),
                        ]}
                        value="desc"
                        onClick={handleSubmit}
                        // variant="text"
                        endIcon={<LoginIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Sign In
                    </LoadingButton>
                </Box>
                <Typography
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Link to="/Signup">Create your account</Link>
                </Typography>
            </Box>
            <ToastContainer />
        </Box>
    )
}