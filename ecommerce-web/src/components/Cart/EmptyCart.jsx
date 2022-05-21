import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const EmptyCart = () => {

    const navigate = useNavigate();
    return (
        <div>
            <img style={{ marginTop: "100px" }} src="https://images.meesho.com/images/pow/empty-cart.png" />
            <h2>Your cart is empty </h2>
            <Button
                sx={[
                    {
                        boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                        m: 1,
                        color: "#ffffff",
                        bgcolor: "#ed3b58", pl: 2, pr: 2
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
                View Products
            </Button>
        </div>
    )
}