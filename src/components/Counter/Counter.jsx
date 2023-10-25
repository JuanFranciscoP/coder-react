import React from 'react'
import { useState } from 'react'


const Counter = ({onAdd}) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

  return (
    <div className='counter'>
        <button className='button' onClick={decrement}>-</button>
        <span className='product-span'>{count}</span>
        <button className='button' onClick={increment}>+</button>
        <button className='button' onClick={()=>{onAdd(count)}}>Agregar Al Carrito</button>
    </div>
  )
}

export default Counter