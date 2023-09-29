import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
    
    </div>
  )
}

export default ItemDetail