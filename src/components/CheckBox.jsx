import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export const CheckboxesGroup = () => {
    const [state, setState] = React.useState({
        girls_fashion: false,
        boys_fashion: false,
        elctronics: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { girls_fashion,
        boys_fashion,
        elctronics } = state;
    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Department</FormLabel>
                <br />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={girls_fashion} onChange={handleChange} name="girls_fashion" color="secondary" />
                        }
                        label="girls_fashion"

                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={boys_fashion} onChange={handleChange} name="boys_fashion" color="success" />
                        }
                        label="boys_fashion"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={elctronics} onChange={handleChange} name="elctronics" color="default" />
                        }
                        label="elctronics"
                    />
                </FormGroup>

            </FormControl>

        </Box>
    );
}
