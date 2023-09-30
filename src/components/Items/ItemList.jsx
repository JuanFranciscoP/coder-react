import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
            {item.description}
          </Card.Text>
          <Link to={`/Product/${item.id}`}>
          <Button variant="primary">Ver Detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }


export default ItemList