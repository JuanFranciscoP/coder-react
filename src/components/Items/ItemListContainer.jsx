import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import ItemList from './ItemList';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products");
    const {category} = useParams();
    const [title,setTitle] = useState("Todos los productos")
    
    useEffect(()=>{
      category? setTitle(category) : setTitle("Todos los productos")
    },[category])

  return (
    <Container>
      <h2 className='list-title'>{title}</h2>
        <Row>
        
            {items !== null && 
            <ItemList items={items} category={category} />
            }
        
        </Row>
    </Container>
  )
}

export default ItemListContainer