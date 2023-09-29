import React from 'react';
import ItemDetail from './ItemDetail';
import useFetch from '../../hooks/useFetch';




const ItemDetailContainer = () => {
    
    const [item] = useFetch("https://fakestoreapi.com/products/2")
    
        
    return (
    <div>
        { 
    item !== null &&
    <ItemDetail item={item}/>
    }
    </div>
    
    
    
  )
}

export default ItemDetailContainer