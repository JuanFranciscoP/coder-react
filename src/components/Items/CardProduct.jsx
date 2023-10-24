import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProduct = ({item}) => {

  return (
      <Card className="card-product text-center" style={{width: "18rem", height: "30rem"}} >
      <Card.Img  src={`${item.image}`} className="card-img" style={{width: "60%", padding:"1rem", height: "180px"}} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{item.title}</Card.Title>
        <Card.Text className="card-price">Precio: ${item.price}</Card.Text>
        <Link to={`/Product/${item.id}`}>
          <button className="card-button" >Ver Detalle</button>
        </Link>
      </Card.Body>
    </Card>
    
  );
};

export default CardProduct;
