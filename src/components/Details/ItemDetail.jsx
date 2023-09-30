import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
        <p>{item.title}</p>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>

    
    </div>
  )
}

export default ItemDetail