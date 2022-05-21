import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getCartData } from '../../redux/cart/cartAction';
import { StepNav } from '../step-nav/StepNav';
import { CartItems } from './CartItems';
import { EmptyCart } from './EmptyCart';

export const CartPage = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    


    const {isAuthenticated,userAuth} = useSelector((store) => store.auth);
    

    if(!isAuthenticated){
       return <Navigate to="/SignIn"/>
    }
const  {cartList}  = useSelector((store) => store.cart);
    console.log('cartList', cartList);
    

    const ID = userAuth._id;
    useEffect(() => {
        getCart();
    }, []);

    const getCart = () => {
        dispatch(getCartData(ID));
    }

    return (
        <>
        <StepNav/>
        <h2>Cart</h2>
            {cartList.length === 0 ? <EmptyCart /> :
                <CartItems />}
        </>
    )
}