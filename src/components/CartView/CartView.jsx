import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext);

    return (
        <Container>
            <h1>Cart</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <Card key={prod.id} style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Img  variant="top" src={prod.img} alt={prod.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{prod.name}</Card.Title>
                                <Button variant="danger" onClick={() => removeItem(prod.id)}>Eliminar</Button>
                            </Card.Body>
                        </Card>
                    );
                })
            }
            </section>
            <Link to='/checkout'>
                <Button variant="primary">Checkout</Button>
            </Link>
        </Container>
    );
}

export default CartView;
