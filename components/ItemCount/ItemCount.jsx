import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initialValue = 2, stock, onAdd }) => {
    const [count, setCount] = useState(initialValue);

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
            <Button variant="success" onClick={decrement} disabled={count === 1}>-</Button>
            <Button variant="success" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            <Button variant="success" onClick={increment} disabled={count === stock}>+</Button>   
            {stock <= 0 && <p>No hay stock disponible</p>}
        </div>
    );
};

export default ItemCount;
