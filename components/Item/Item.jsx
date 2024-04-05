import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, category }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Categoría: {category}
        </Card.Text>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;