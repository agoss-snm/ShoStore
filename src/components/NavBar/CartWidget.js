import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import CartContext from '../CartContext/cartContext';

const CarWidget=()=>{
    const [showCart, setShowCart]= useState (false)
    useEffect (()=>{

    })
    const {products} =useContext (CartContext)


const openCart =()=> {
    setShowCart(!showCart)
}

console.log ( 'agregados desde cartWidget',products)

    
return (
    <div className= 'cart-container'>
    <ShoppingCartIcon onClick={openCart}/>
    <div className={`box-cart ${showCart && 'active'}`}>
        {products.map((product)=>{
            return(
    <div className= 'item-cart-list'>
        <p>{product.title}</p>
        <span>{product.price} </span>
        </div>
            )
        })}
    
    
    </div>
    
    </div>
    )
    }
        export default CarWidget;