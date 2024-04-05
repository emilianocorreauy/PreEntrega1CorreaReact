import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useNotification } from '../../notification/hooks/useNotification';
import { Button, Card, Col, Row } from 'react-bootstrap';

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1 && value <= stock) {
            setCount(value);
        }
    };

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} className="form-control" />
            <Button variant="success" onClick={() => onAdd(count)} className="mt-2">Agregar al carrito</Button>
        </div>
    );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <Button variant="success" onClick={decrement} disabled={count === 1}>-</Button>
            <Button variant="success" onClick={increment} disabled={count === stock}>+</Button>
            <Button variant="success" onClick={() => onAdd(count)} className="mt-2">Agregar al carrito</Button>
        </div>
    );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button');
    const { addItem, isInCart } = useContext(CartContext);
    const { showNotification } = useNotification();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            name,
            price,
            quantity
        };
        console.log(objProductToAdd);
        showNotification('success', `Se agregó correctamente ${quantity} ${name}`);
        addItem(objProductToAdd);
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Row>
                    <Col>
                        <Card.Img src={img} alt={name} style={{ width: '100%' }} />
                    </Col>
                    <Col>
                        <Card.Text>
                            <p><strong>Categoría:</strong> {category}</p>
                            <p><strong>Descripción:</strong> {description}</p>
                            <p><strong>Precio:</strong> {price}</p>
                        </Card.Text>
                    </Col>
                </Row>
                <footer>
                    {!isInCart(id) ? (
                        inputType === 'input' ? (
                            <InputCount onAdd={handleOnAdd} stock={stock} />
                        ) : (
                            <ButtonCount onAdd={handleOnAdd} stock={stock} />
                        )
                    ) : (
                        <Link to='/cart'><Button variant="primary">Finalizar compra</Button></Link>
                    )}
                </footer>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
