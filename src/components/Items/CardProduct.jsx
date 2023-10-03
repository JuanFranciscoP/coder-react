import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CardProduct = ({item}) => {

  return (
      <Card className="card-product" >
      <Card.Img  src={`${item.image}`} className="card-img" style={{width: "60%", padding:"1rem"}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="card-description"></Card.Text>
        <p>Precio: ${item.price}</p>
        <Link to={`/Product/${item.id}`}>
          <Button variant="primary">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
};

export default CardProduct;
