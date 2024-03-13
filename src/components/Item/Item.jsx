import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ id, name, img, price, category }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h5>Categoría: {category}</h5>
          <h4>Precio: ${price}</h4>
        </Card.Text>
        <Link to={`/item/${id}`} >Ver detalle</Link>
      </Card.Body>
    </Card>
  );
}


export default Item;