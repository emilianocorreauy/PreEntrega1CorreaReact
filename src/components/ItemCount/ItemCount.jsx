import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial = 2, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1);
        }
    };

    return (
        <div>
            <h3>{count}</h3>
            <Button variant="success" onClick={decrement}>-</Button>
            <Button variant="success" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            <Button variant="success" onClick={increment}>+</Button>   
        </div>
    );
};

export default ItemCount;