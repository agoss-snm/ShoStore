import db from '../../firebase'    
import CartContext from '../CartContext/cartContext'
import { Link } from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore'
import { useState } from 'react'


import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactForm({products, total}) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] =useState('')
  const [phone, setPhone] =useState('')
  const [mail, setMail] =useState('')

    const[formData, setFormData]=useState({
        name:'',
        phone:'',
        mail:''
    })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendOrder = () => {
        let order= {}
        order.buyer= formData
        order.items= products
        order.total= total
        console.log('enviar orden', order)
        pushOrder(order)
        setOpen(false);
     };

  const [orderId, setOrderId]= useState()

    const pushOrder=async(order) =>{
        const orderFirebase= collection(db, 'ordenes')
        const orden= await addDoc(orderFirebase, order)
        setOrderId(orden.id)
        console.log('order', orden.id)
    }




  const handleChange = (e) => {
    console.log( 'info imput', e.target.name)
    const {name, value}= e.target
    setFormData({...formData,[name]: value})
  };
  
  return (
    <div>

<Button variant="contained" color='success' onClick={handleClickOpen}>
        Its ok, Lets Go!
      </Button>
      <Dialog open={open} onClose={handleClose}/>
    

        {orderId?(
            <>
            <h3>successful purchase!</h3>
            <h>Order Number: {orderId}</h>
            </>
        ):(
<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please Complete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To finalize the purchase we will need:
          </DialogContentText>
          <TextField  autoFocus margin="dense" label="Name"  name= 'name'fullWidth variant="standard" value={formData.name} onChange={handleChange}/>
          <TextField  autoFocus margin="dense" label="Email Address" name= 'mail' fullWidth variant="standard" value={formData.mail} onChange={handleChange}/>
          <TextField  autoFocus margin="dense" label="Phone Number" name= 'phone' fullWidth variant="standard" value={formData.phone}  onChange={handleChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendOrder}>Finalize</Button>
        </DialogActions>
      </Dialog>
        )
        }
     

      
      
    </div>
  );
}