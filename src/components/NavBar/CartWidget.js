import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import CartContext from '../CartContext/cartContext';
import ModalCart from '../ModalCart/ModalCart';


const CartWidget = () => {
  const [showCart, setShowCart ] = useState(false)
  useEffect(() => {
      //console.log("products cartWidget" , products)
  })
  const {products, totalPrice, clearCart} = useContext(CartContext)

  const openCart = () => {
      setShowCart(!showCart)
  }

  return(
      <div className="cart-container">
       
          <ShoppingCartIcon  onClick={openCart}/>
          {showCart && <ModalCart productos={products} total={totalPrice} clear= {clearCart}/>}
          <p> $ {totalPrice}</p>
      </div>
  )
}

export default CartWidget