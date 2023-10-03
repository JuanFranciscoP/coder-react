import React from 'react';
import useFetch from '../../../hooks/useFetch';
import ItemDetail from './ItemDetail'




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