import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { useNotification } from "../../notification/hooks/useNotification";
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import { db } from "../../services/firebaseConfig";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListMemoized = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false);
    const { categoryId } = useParams();
    const { showNotification } = useNotification();

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev);
        }, 2000);
    }, []);

    useEffect(() => {
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            query(collection(db, 'products'), orderBy('name', 'desc'))
        );
        
        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });

                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error('Error en la consulta de Firestore:', error);
                showNotification('error', 'Hubo un error cargando los productos. Por favor, inténtalo de nuevo más tarde.');
            });
    }, [categoryId]); 
    
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{greeting}</Card.Title>
                            <ItemListMemoized products={products}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemListContainer;