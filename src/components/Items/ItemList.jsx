import React from 'react'
import { Col } from 'react-bootstrap'
import CardProduct from './CardProduct';

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