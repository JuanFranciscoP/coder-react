import React from 'react'
import Counter from '../../Counter/Counter'

const ItemDetail = ({item, onAdd}) => {
  return (
    <div className='p-4'>
        <h2>{item.title}</h2>
        <img className='mt-4' src={item.image} alt={item.title} />
        <Counter onAdd={onAdd} item={item}/>
        <p className='mt-4'>{item.description}</p>
    </div>
  )
}

export default ItemDetail