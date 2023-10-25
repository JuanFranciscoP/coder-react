import React, { useEffect } from 'react'
import { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    
  
    const [cart,setCart] = useState([]);
    
    
    const cartItems = () => {
      return cart.reduce((acc,prod) => acc + prod.q,0)
    }
    
    const addItem = (item,q) => {
      const isInCart = cart.find((prod)=> prod.id === item.id);

        if (isInCart) {
            isInCart.q += q;
            setCart([...cart])
        } 
        else {
                setCart([...cart,{...item,q}])
            }
    }
  const values = {
    cart,
    addItem,
    cartItems
  }
  
  
    return (
<CartContext.Provider value={values}>
    {children}
</CartContext.Provider>
        )
}

export default CartContextProvider