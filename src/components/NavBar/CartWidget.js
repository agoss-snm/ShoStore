import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import CartContext from '../CartContext/cartContext';
import ModalCart from '../ModalCart/ModalCart';

const CarWidget=()=>{
    const [showCart, setShowCart]= useState (false)
    useEffect (()=>{

    })
    const {products, totalPrice} =useContext (CartContext)


const openCart =()=> {
    setShowCart(!showCart)
}

console.log ( 'agregados desde cartWidget',products)

    
return (
    <div className= 'cart-container'>
    <ShoppingCartIcon onClick={openCart}/>
   {showCart && <ModalCart products={products} total={totalPrice}/>}
    
    </div>
    )
    }
        export default CarWidget;