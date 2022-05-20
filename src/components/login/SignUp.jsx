import { Box, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../Navbar"

export const SignUp = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{bgcolor:"#f8dcdf",height:"700px"}}>
        <Navbar/>

            <Box sx={{width:"27%",height:"300px",bgcolor:"#ffffff",border:0,p:2,m:"auto",mt:5,boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}>
                <h3>Sign up to save your order</h3>
                <TextField
                    id="number"
                    label="Phone Number"
                    type="text"
                    autoComplete="current-name"
                    variant="standard"
                // value={name}
                // onChange={(e) => handleChange(e)}
                />
                <br />
                <Button
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
                    onClick={()=>navigate("/OTP")}
                    variant="text"
                >
                    Send Otp
                </Button>
            </Box>
        </Box>
    )
}