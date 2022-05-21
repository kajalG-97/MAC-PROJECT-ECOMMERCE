import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData, productData, productError } from "../redux/product/productAction";

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";

import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxesGroup } from "./CheckBox";
import axios from "axios";
import { Navbar } from "./Navbar";
import { ProductCard } from "./productCard";

export const ProductsPage = () => {


    const dispatch = useDispatch();


    const { productList, proError, proLoading } = useSelector((store) => store.products);

    const [prize, setPrize] = useState("asc");

    const [rating, setRating] = useState("0");

    const [catFilter, setCatFilter] = useState("");

    const [alpha, setAlpha] = useState("desc");

    const [value, setValue] = useState("price")

    const size = productList.totalPages;

    const [page, setPage] = useState(1);


    useEffect(() => {
        getData();

    }, [rating,value,prize,page]);


    const getData = () => {
        axios.get(`https://mac-project-ecommerce.herokuapp.com/products?page=${page}&rating=${rating}&sortBy=${value}&OrderBy=${prize}`).then(({ data }) => {
            
            dispatch(productData(data))
        })
            .catch((err) => dispatch(productError()));
    }


    const handleSortPrice = (e) => {
        setPrize(e.target.id);
        setValue("price")
    }

    const handleSortAlpha = (e) => {

        setPrize(e.target.id);
        setValue("product_name");
    }

    const handleSortByStar = (e) => {
        setRating(e.target.id);

    }

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return proLoading ? <img src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif" alt="loading..." /> : proError ? <img src="https://www.betterliving.co.in/images/404.gif" alt="Error" /> : (
        <>
            <Navbar />
            <h1>ProductsPage</h1>
            <Box sx={{ display: "flex", m: "auto", width: "95%" }}>

                <Box sx={{ border: 0, pt: 5, mt: 2, flex: 0.7, flexDirection: "column", display: "block", boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}>
                    <Box sx={{}}>
                        <Button onClick={handleSortPrice}
                            sx={{ m: 1, color: "#f2f2ff", bgcolor: "#121212", textDecoration: "none", fontSize: "12px" }} color="inherit" id="desc">Sort By Price Desc</Button>
                    </Box>
                    <Box>
                        <Button
                            sx={[
                                {
                                    boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                    m: 1,
                                    color: "#ffffff",
                                    bgcolor: "#ed3b58",
                                    fontSize: "12px"
                                },
                                () => ({
                                    "&:hover": {
                                        color: "#000000", bgcolor: "#f36c82"
                                    }
                                }),
                            ]}
                            value="asc"
                            id="asc"
                            onClick={handleSortPrice}
                            variant="text"
                        >
                            Sort by Price Acs
                        </Button>
                    </Box>


                    <Box sx={{}}>
                        <Button onClick={handleSortAlpha}
                            sx={{ m: 1, color: "#f2f2ff", bgcolor: "#121212", textDecoration: "none", fontSize: "12px" }} color="inherit" id="desc" >Sort By Name Z - A</Button>
                    </Box>
                    <Box>
                        <Button
                            sx={[
                                {
                                    boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                    m: 1,
                                    color: "#ffffff",
                                    bgcolor: "#ed3b58",
                                    fontSize: "12px"
                                },
                                () => ({
                                    "&:hover": {
                                        color: "#121212", bgcolor: "#f36c82", fontSize: "12px"
                                    }
                                }),
                            ]}
                            value="asc"
                            id="asc"
                            onClick={handleSortAlpha}
                            variant="text"
                        >
                            Sort by Name A - Z
                        </Button>
                    </Box>


                    <Box sx={{ mt: 4 }}>
                        <Typography component="legend" color="text.secondary">Avg. Customer Review</Typography>

                        <Button
                            sx={{
                                '& > legend': { mt: 2 },
                                display: "flex",
                                alignItems: "center",

                                justifyContent: "space-around",
                                height: "30px",
                                width: "70%",
                                m: "auto"
                            }}
                            onClick={handleSortByStar} id={4}><Rating name="read-only" value={4} readOnly />

                            <p style={{}}> & up</p>

                        </Button>
                        <Button
                            sx={{
                                '& > legend': { mt: 2 },
                                display: "flex",
                                alignItems: "center",

                                justifyContent: "space-around",
                                height: "30px",
                                width: "70%",
                                m: "auto"
                            }}
                            onClick={handleSortByStar} id={3} ><Rating name="read-only" value={3} readOnly />

                            <p style={{}}> & up</p>

                        </Button>
                        <Button
                            sx={{
                                '& > legend': { mt: 2 },
                                display: "flex",
                                alignItems: "center",

                                justifyContent: "space-around",
                                height: "30px",
                                width: "70%",
                                m: "auto"
                            }}
                            onClick={handleSortByStar} id={2} ><Rating name="read-only" value={2} readOnly />

                            <p style={{}}> & up</p>

                        </Button>
                        <Button
                            sx={{
                                '& > legend': { mt: 2 },
                                display: "flex",
                                alignItems: "center",

                                justifyContent: "space-around",
                                height: "30px",
                                width: "70%",
                                m: "auto"
                            }}
                            onClick={handleSortByStar} id={1} ><Rating name="read-only" value={1} readOnly />

                            <p style={{}}> & up</p>

                        </Button>
                    </Box>
                    <Box sx={{ m: 4, border: 0, width: "80%" }}>

                        <CheckboxesGroup />

                    </Box>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flex: 3,
                    justifyContent: "space-around",
                    gap: 7,
                    // width: "95%",
                    m: 3,
                    marginTop: "20px",
                }}>
                    {productList.products && productList.products.map((event) => {
                        return <ProductCard key={event.id} event={event} />
                    })}</Box>

            </Box>
            <br />
            <br />
            <Box sx={{ width: "fit-content", margin: "auto" }}>
                <Stack spacing={4}>
                    <Pagination count={size} page={page} onChange={handleChangePage} />
                </Stack>
            </Box>
            <br />
            <br />


        </>
    )
}