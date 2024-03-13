import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ItemDetail({ id, name, img, price, category, stock, description }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h3>Categoría: {category}</h3>
          <h4>{description}</h4>
          <h4>Precio: ${price}</h4>
        </Card.Text>
        <ItemCount stock={stock} />
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;