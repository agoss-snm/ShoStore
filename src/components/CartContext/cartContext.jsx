import {createContext, useState} from 'react';

const CartContext= createContext();

const CartProvider= ({children})=> {
    const [products,setProducts]=useState([])
    const [totalPrice, setTotalPrice] =useState (0)

    const addProducts=(product) =>{
     setProducts([...products, product])
     setTotalPrice (totalPrice +product.price)
     console.log ('total compra',totalPrice +product.price) 
    }

    const cleanCart =(product, setProducts) =>{
        setProducts([])
    }

    const data={
        products,
        addProducts,
        totalPrice,
        cleanCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
            </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext;
