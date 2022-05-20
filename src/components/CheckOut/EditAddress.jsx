import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { getSingleData, userPatchData } from '../../redux/user/userAction';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

export const EditAddress = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    React.useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        dispatch(getSingleData(id));
    }

    const { single } = useSelector((store) => store.user);  

    const [data, setData] = React.useState( single );

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData({
            ...data, [id]: value

        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userPatchData(id, data, navigate));
    }

    const { name, mobile, address } = data;
   
    return (
        <Box sx={{ mt: 5 }}>
            <Box sx={{ border: 0, display: "flex", alignItems: "center", m: "auto", mb: 5, width: "28%" }}>
                <Typography variant="h6" component="h2" color="#e00e9a">
                    Edit Address
                </Typography>

            </Box>


            <Box sx={{ mt: 5, border: 0, display: "flex", alignItems: "center", m: "auto", width: "28%" }}>
                <CallIcon color="disabled" sx={{ fontSize: 30, mr: 2, mb: 3 }} /> <Typography variant="h5" component="h2">
                    Contact Details
                </Typography>
            </Box>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '45ch', border: 0 },
                }}
                noValidate
                autoComplete="off"
            >

                <div>

                    <TextField
                        id="name"
                        label="Name"
                        type="text"
                        autoComplete="current-name"
                        variant="standard"
                        value={name}
                        onChange={(e) => handleChange(e)}
                    />

                </div>
                <div>

                    <TextField
                        id="mobile"
                        label="Mobile Number"
                        type="Number"
                        autoComplete="current-mobile"
                        variant="standard"
                        value={mobile}
                        onChange={(e) => handleChange(e)}
                    />

                </div>
                <div>
                    <Box sx={{ border: 0, display: "flex", alignItems: "center", m: "auto", mt: 5, width: "28%" }}>
                        <AddLocationRoundedIcon color="disabled" sx={{ fontSize: 30, mr: 2 }} /> <Typography variant="h6" component="h2">
                            Address
                        </Typography>
                    </Box>
                </div>

                <div>

                    <TextField
                        id="address"
                        label="Address"
                        type="text"
                        autoComplete="current-address"
                        variant="standard"
                        value={address}
                        onChange={(e) => handleChange(e)}
                    />

                </div>

                <Button
                    sx={[
                        {
                            boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                            m: 1,
                            mt: 3,
                            color: "#ffffff",
                            bgcolor: "#ed3b58", pl: 9, pr: 9
                        },
                        () => ({
                            "&:hover": {
                                color: "#fafafa", bgcolor: "#f36c82"
                            }
                        }),
                    ]}
                    value="desc"
                    onClick={handleSubmit}
                    variant="text"
                >
                    Save Address & Continue
                </Button>
            </Box>
        </Box>
    );
}
