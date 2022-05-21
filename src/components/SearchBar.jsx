import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f4e5edc4",
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.10),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'secondary',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '18ch',
            },
        },
    },
}));

export const SearchBar = () => {

    const [data, setData] = React.useState([]);

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };


    const handleChange = (value) => {
        if (!value) {
            setData([]);
            return;
        }
        fetch(
            `https://mac-project-ecommerce.herokuapp.com/product_name/search?search=${value}`
        )
            .then((res) => res.json())
            .then((json) => setData(json));
    };



    const optimize_function = useCallback(debounce(handleChange), []);


    return (

        <Box sx={{ mt: 3, display: { xs: "none", md: "inline-block" }, height: "50px" }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => optimize_function(e.target.value)}
                />
            </Search>

            <Box sx={{ mt: 1.4, boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>

                {data.length > 0 && (
                    <div style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        textAlign: "left",
                       
                        width: "200%",
                        height: "200px",
                        overflow: "scroll"
                    }} className="autocomplete">
                        {data.map((el, i) => (

                            <Box key={i}
                                sx={[{p:0,pl:5,lineHeight:0.5,m:0,height:"fit-content",border:"0.1px solid transparent"},() => ({
                                    "&:hover": {
                                        color: "#fafafa", bgcolor: "#ff5874c0"
                                    }
                                })]}
                                className="autocompleteItems">


                                <Link to={`/product/${el._id}`} style={{ textDecoration: "none" }}>
                                    <p style={{ color: "#000000", textDecoration: "none" }}>{el.product_name}</p>
                                </Link>
                            </Box>
                        ))}
                    </div>
                )}
            </Box>
        </Box>

    )
}