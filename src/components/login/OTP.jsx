import { Box, Button, TextField } from "@mui/material"
import { Navbar } from "../Navbar"

export const OTP = () => {
    return (
        <Box sx={{bgcolor:"#f8dcdf",height:"700px"}}>
        <Navbar/>

            <Box sx={{width:"27%",height:"300px",bgcolor:"#ffffff",border:0,p:2,m:"auto",mt:5,boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}>
                <h3>Enter OTP sent to 8987654677</h3>
               
              
                <h4 onClick={() => navigate("/")} style={{ color: "#e00e9a", cursor: "pointer" }}>Change Number</h4>
                  
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
                    // onClick={handleSubmit}
                    variant="text"
                >
                    Verify
                </Button>
            </Box>
        </Box>
    )
}