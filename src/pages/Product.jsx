import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/Items/Details/ItemDetailContainer'


const Product = () => {
    const {id} = useParams()
    
    return (
    
      <ItemDetailContainer id={id}/>
    
  )
}

export default Product
