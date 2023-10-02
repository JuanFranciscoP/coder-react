import React from 'react';
import ItemDetail from './ItemDetail';
import useFetch from '../../hooks/useFetch';




const ItemDetailContainer = ({id}) => {
    
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    
        
    return (
    <div className='producto'>
        { 
    item !== null &&
    <ItemDetail item={item}/>
    }
    </div>
    
    
    
  )
}

export default ItemDetailContainer