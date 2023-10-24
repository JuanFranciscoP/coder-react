import React from 'react';
import { useContext } from 'react';
import CartContext from '../../../Context/CartContext';
import useFetch from '../../../hooks/useFetch';
import ItemDetail from './ItemDetail'




const ItemDetailContainer = ({id}) => {
    const {addItem, cart} = useContext(CartContext);
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    const onAdd = (q) => {
        addItem(item,q)
    }
        
    return (
    <div className='product-content'>
        { 
    item !== null &&
    <ItemDetail item={item} onAdd={onAdd}/>
    }
    </div>
    
    
    
  )
}

export default ItemDetailContainer