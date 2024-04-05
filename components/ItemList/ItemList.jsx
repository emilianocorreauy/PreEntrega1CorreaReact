import React from 'react';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemList = ({ products }) => {
    return (
        <Container>
            <Row>
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <Item key={product.id} {...product} />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </Row>
        </Container>
    );
}

export default ItemList;
