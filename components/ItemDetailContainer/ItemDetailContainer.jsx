import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebaseConfig";



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...data }

                setProduct(productAdapted)
            })
            .catch()

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


