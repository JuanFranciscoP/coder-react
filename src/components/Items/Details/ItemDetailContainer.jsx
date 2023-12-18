import React from 'react';
import { useContext } from 'react';
import CartContext from '../../../Context/CartContext';
import useFetch from '../../../hooks/useFetch';
import ItemDetail from './ItemDetail'




const ItemDetailContainer = ({id}) => {
    const {addItem} = useContext(CartContext)
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    const onAdd = (q,resetQ) => {
        addItem(item,q)
        resetQ(0)
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