import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='p-4 product-content'>
        <h2>{item.title}</h2>
        <img className='mt-4' src={item.image} alt={item.title} />
        <p className='mt-4'>{item.description}</p>
    </div>
  )
}

export default ItemDetail