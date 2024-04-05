import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { Button, Container, Form } from "react-bootstrap";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async (userData) => {
        try {
            setLoading(true);
            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total
            };
    
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
    
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;
    
            docs.forEach(doc => {
                const data = doc.data();
                const stockDb = data.stock;
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data});
                }
            });
    
            if(outOfStock.length === 0) {
                batch.commit();
    
                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);
                
                clearCart();
                setOrderId(id);
            } else {
                console.error('hay productos que no tienen stock disponible');
            }
        } catch (error) {
            console.error('Hubo un error en la generacion de la orden');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };
        createOrder(userData);
    };

    if(loading) {
        return <h1>Su orden está siendo generada...</h1>;
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return  (
        <Container>
            <h1>Checkout</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Ingrese su email" />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Ingrese su teléfono" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Generar orden de compra
                </Button>
            </Form>
        </Container>
    );
};

export default Checkout;
