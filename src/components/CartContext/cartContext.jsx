import {createContext, useState} from 'react';

const CartContext= createContext();

const CartProvider= ({children})=> {
    const [products,setProducts]=useState([])

    const addProducts=() =>{
        setProducts([...products, products])
    }
    const data={
        products,
        addProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
            </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext;
