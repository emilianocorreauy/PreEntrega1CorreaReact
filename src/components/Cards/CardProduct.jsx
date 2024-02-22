import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduct() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/img/producto0.png" />
      <Card.Body>
        <Card.Title>Yerba Sara 1kg</Card.Title>
        <Card.Text>
          Yerba suave, sin acidez, sin nervios.
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;