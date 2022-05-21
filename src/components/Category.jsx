import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../redux/product/productAction";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";

import { Navbar } from "./Navbar";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const CategoryPage = () => {

    const dispatch = useDispatch();

    const [catFilter, setCatFilter] = useState("");

    const { productList, proError, proLoading } = useSelector((store) => store.products)


    const size = productList.totalPages;

    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
    }, [catFilter, page]);


    const getData = () => {
        dispatch(getProductData(catFilter));

    }
    const handleChangePage = (event, value) => {
        setPage(value);
    };





    const Option = ["girls fashion",
        "mens fashion",
        "electronic"];

    return proLoading ? (
        <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
    ) : proError ? (
        <img
            src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
            alt="Oops something went wrong"
        />
    ) : (
        <>
            <Navbar />
            <h1>CategoryPage</h1>
            <Box sx={{ border: 0, width: "40%" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel
                        sx={[
                            {
                                color: "#202020",
                            },
                            () => ({ "&:hover": { color: "#202020", bgcolor: "#474747" } }),
                        ]}
                        id="demo-simple-select-standard-label"
                    >
                        Select Category
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={catFilter}
                        onChange={(e) => {
                            setCatFilter(e.target.value);
                        }}
                        label="Type"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {Option &&
                            Option.map((e) => {
                                return (
                                    <MenuItem
                                        key={e}
                                        // onClick={handleChangeType}
                                        id={e}
                                        value={e}
                                    >
                                        {e}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>
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