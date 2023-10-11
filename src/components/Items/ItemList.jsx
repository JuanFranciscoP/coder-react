import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProduct from './CardProduct';
import NewCardProduct from './NewCardProduct';


const ItemList = ({items, category}) => {
  const filteredProducts = category ? items.filter((item) => item.category === category ) : items;
  
  return (
    <>
    {
        filteredProducts.map((product)=> {

          return (
            
              
              <Col md={4} lg={3} className="mt-4 container product-list" key={product.id}>
                <CardProduct item={product} category={category} />
              </Col>

              

            
            
            
          )

        })
          

    }
    </>
  )
}



export default ItemList