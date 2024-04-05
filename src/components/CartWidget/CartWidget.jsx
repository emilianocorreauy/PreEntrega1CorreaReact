import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import cart from './assets/cart.svg';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to={'/cart'} style={{ textDecoration: 'none' }}>
           <Badge bg="secondary"> <img src={cart} alt="Cart" style={{ width: '30px', marginRight: '5px' }} />
            {totalQuantity}</Badge>
        </Link>
    );
};

export default CartWidget;
