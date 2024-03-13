import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(result => {
                setProduct(result)
            })
    }, [itemId])

    return (
        <Container>
            <Row>
                <h1>Detalle de producto</h1>
                <ItemDetail {...product} />
            </Row>
        </Container>

    )
}

export default ItemDetailContainer