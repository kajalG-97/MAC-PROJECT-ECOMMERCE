import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';

import InputBase from '@mui/material/InputBase';

import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';


import { Link, useNavigate } from "react-router-dom";

import SvgIcon from '@mui/material/SvgIcon';

import { useDispatch, useSelector } from 'react-redux';


import Badge from '@mui/material/Badge';

import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';

import { useCallback, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { CartStepper } from './Stepper';



const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
    },
});


export const StepNav = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const { cartList, Loading, Error } = useSelector((store) => store.cart)


    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Link to="/" style={{ textDecoration: "none" }}> <Typography variant="p" component="h2" sx={{ textDecoration: "none", color: "grey", mr: 4, flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                            HappyMart
                        </Typography></Link>
                        {/* <CartStepper /> */}
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}
