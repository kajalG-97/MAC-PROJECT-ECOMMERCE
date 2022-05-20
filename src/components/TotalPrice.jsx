import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const TotalPrice = ({cartList})=>{

    const navigate = useNavigate();

    let total = 0;
    return(
        <>
        <Box sx={{ width: "35%", p: 2, ml: 2, border: 0, boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px' }}>
                    <h3>Price Details</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <h4>Total Product Price</h4>
                        {cartList && cartList.map((event) => {
                            total += event.price * event.qty;
                        })}
                        <h4>{total}</h4>
                    </Box>
                    <hr />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <h4>Order Total</h4>
                        
                        <h4>{total}</h4>
                    </Box>

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
                        onClick={() => navigate("/payment")}
                        variant="text"
                    >
                        Place Order
                    </Button>

                </Box>
        </>
    )
}