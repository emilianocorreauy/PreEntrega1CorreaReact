import Item from "../Item/Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemList = ({ products }) => {
    return (
        <Container>
            <Row>
            {
                products.map(product => (
                    <Item key={product.id} {...product} />
                ))
            }
            </Row>
         </Container>
    );
}






export default ItemList;