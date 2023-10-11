import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CardProduct = ({item}) => {

  return (
      <Card className="card-product text-center" style={{width: "18rem", height: "30rem"}} >
      <Card.Img  src={`${item.image}`} className="card-img" style={{width: "60%", padding:"1rem", height: "180px"}} />
      <Card.Body className="card-body">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="card-description"></Card.Text>
        <Card.Text>Precio: ${item.price}</Card.Text>
        <Link className="mb-2 card-button-container" to={`/Product/${item.id}`}>
          <Button className="card-button">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
};

export default CardProduct;
