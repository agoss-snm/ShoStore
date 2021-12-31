import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import CartContext from '../CartContext/cartContext';

const CarWidget=()=>{
    const [showCart, setShowCart]= useState (false)
    const {products} =useContext (CartContext)

 



const openCart =()=> {
    setShowCart(!showCart)
}

console.log ( 'agregados al carrito',products)


return (
<div className= 'cart-container'>
<ShoppingCartIcon onClick={openCart}/>
<div className={`box-cart ${showCart && 'active'}`}>
<div className= 'item-cart-list'>
    <p>Nombre</p>
</div>
</div>

</div>
)
}
    export default CarWidget;