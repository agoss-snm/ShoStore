import {createContext, useState} from 'react';

const CartContext= createContext();


const CartProvider= ({children})=> {
    const [products,setProducts]=useState(JSON.parse(localStorage.getItem("productos")) || [])
    const [totalPrice, setTotalPrice] =useState (0)

    const addProducts=(product) =>{
        setProducts([...products, product])
        setTotalPrice (totalPrice +product.price)
        console.log ('total compra',totalPrice +product.price) 
    }

    const clearCart =() =>{
        setProducts([])
        setTotalPrice(0)
    }

   



    const data={
        products,
        addProducts,
        totalPrice,
        clearCart
    }




    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext;
