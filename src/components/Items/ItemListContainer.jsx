import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import ItemList from './ItemList';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products");
    const {category} = useParams();
    console.log(items)
    

  return (
    <Container>
        <Row>
            {items !== null && 
            <ItemList items={items} category={category}  />
            }
        
        </Row>
    </Container>
  )
}

export default ItemListContainer