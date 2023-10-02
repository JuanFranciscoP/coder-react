import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CardProduct = ({item}) => {

  return (
    <Card className="card-product" >
      <Card.Img variant="top" src={`${item.image}`} style={{ height: "40%" }} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Link to={`/Product/${item.id}`}>
          <Button variant="primary">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
