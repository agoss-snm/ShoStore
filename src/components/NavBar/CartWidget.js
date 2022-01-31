import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
//material
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dialog from '@mui/material/Dialog';
import Badge from '@mui/material/Badge';
//style
import './Navbar.css';
//components
import CartContext from '../CartContext/cartContext';
import ModalCart from '../ModalCart/ModalCart';
//Semantic UI Imports
import { Button} from 'semantic-ui-react';

const CartWidget = () => {
  const {products, totalPrice, clearCart, } = useContext(CartContext)

// ------------------------------------------------------------

const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //---------------------------------------------------
  return(
      <div className="cart-container">
      <Badge badgeContent={ <p> $ {totalPrice}</p>} color="secondary"><Button variant="outlined" onClick={handleClickOpen}><ShoppingCartIcon/></Button></Badge>
      
       <Dialog open={open} onClose={handleClose}>
        
          <ModalCart productos={products} total={totalPrice} clear= {clearCart}/>
          
        
          </Dialog>
      </div>
  )
}

export default CartWidget