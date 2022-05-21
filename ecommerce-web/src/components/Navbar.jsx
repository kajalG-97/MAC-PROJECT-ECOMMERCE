import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';

import LogoutIcon from '@mui/icons-material/Logout';

import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import { Link, useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from "@mui/material/styles"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getCartData } from '../redux/cart/cartAction';

import { authLogout } from "../redux/auth/authAction"
import { SearchBar } from './SearchBar';




const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
    },
});


export const Navbar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const { cartList, Loading, Error } = useSelector((store) => store.cart)

    const { isAuthenticated, userAuth } = useSelector((store) => store.auth);


    const getCart = () => {
        dispatch(getCartData());
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                           </IconButton>
                        <Link to="/" style={{ textDecoration: "none" }}> <Typography variant="p" sx={{ mr: 2 }} component="h2" color="#570aa0">
                            HappyMart
                        </Typography></Link>


                        <Link to="/product" style={{ textDecoration: "none" }}> <Typography variant="h6" sx={{ mr: 2 }} component="h3" color="#000000">
                            Products
                        </Typography></Link>



                        <Link to="/category" style={{ textDecoration: "none" }}>  <Typography variant="h6" sx={{ mr: 2 }} component="h3" color="#000000">
                            Category
                        </Typography></Link>


                        <SearchBar />


                        <Typography variant="h6" sx={{ ml: 55, mr: 2 }} component="h2" color="#e00e9a">
                            Hi! {userAuth && userAuth.firstName}
                        </Typography>




                        {!isAuthenticated ? <Button
                            sx={[
                                {
                                    boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                    m: 1,
                                    color: "#ffffff",
                                    bgcolor: "#ed3b58",
                                },
                                () => ({
                                    "&:hover": {
                                        color: "#fafafa", bgcolor: "#f36c82"
                                    }
                                }),
                            ]}
                            value="desc"
                            onClick={() => navigate("/signIn")}
                            variant="text"
                        >
                            Sign In
                        </Button> : <Button
                            sx={[
                                {
                                    boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                    m: 1,
                                    color: "#ffffff",
                                    bgcolor: "#ed3b58",
                                },
                                () => ({
                                    "&:hover": {
                                        color: "#fafafa", bgcolor: "#f36c82"
                                    }
                                }),
                            ]}
                            value="desc"
                            onClick={() => {
                                dispatch(authLogout());
                                navigate("/")
                            }}
                            variant="text"
                            endIcon={<LogoutIcon/>}
                        >
                            Logout 
                           
                        </Button>}

                        <Button onClick={() => navigate("/cart")}><AddShoppingCartIcon color="secondary" fontSize="large" />

                            {/* <img style={{ width: "45%" }} src="https://img.icons8.com/fluency/344/shopping-cart-promotion.png" /> */}
                        </Button><p >{cartList.length}</p>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}
