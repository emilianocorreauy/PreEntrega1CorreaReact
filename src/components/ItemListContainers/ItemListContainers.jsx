import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        console.log("CategoryId", categoryId)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
    }, [categoryId])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;