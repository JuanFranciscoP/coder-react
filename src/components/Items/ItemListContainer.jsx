import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import ItemList from './ItemList';
import useFetch from '../../hooks/useFetch';

const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products")
  return (
    <Container className='bg-dark'>
        <Row>
            {items !== null && 
            <ItemList items = {items} />
            }
        
        </Row>
    </Container>
  )
}

export default ItemListContainer