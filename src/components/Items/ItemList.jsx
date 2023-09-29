import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemList = ({items}) => {
  return (
    <>
    {
        items.map(item => {
        return (
            <Col md={4} lg={3} className="mt-4" key={item.id}><CardList item={item}/></Col>
            )
        })
    }
    </>
  )
}

const CardList = ({item}) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver Detalle</Button>
        </Card.Body>
      </Card>
    );
  }


export default ItemList