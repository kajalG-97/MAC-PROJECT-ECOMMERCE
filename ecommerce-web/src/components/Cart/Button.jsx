import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { cartPatchData, getCartData } from '../../redux/cart/cartAction';

export const GroupSizesColors = ({ item }) => {
   
    const [count, setCount] = React.useState(item.qty);


    React.useEffect(() => {
        patchData();
    }, [count]);


    const dispatch = useDispatch();

    const patchData = () => {
        dispatch(cartPatchData(item.id, { ...item, qty: count }))
    }


    const handleChangeCount = (e) => {
        if (e.target.id === "plus") {
            setCount(count + 1);
            patchData()
        }
        if (e.target.id === "minus" && count > 1) {
            setCount(count - 1);
            patchData()
        }

    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup size="small" aria-label="small button group">
                <Button onClick={handleChangeCount} id="minus" key="one"> - </Button>
                <Button key="two">{count}</Button>
                <Button onClick={handleChangeCount} id="plus" key="three">+</Button>
            </ButtonGroup>

        </Box>
    );
}
