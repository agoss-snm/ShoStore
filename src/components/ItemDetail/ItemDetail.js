import React, {useState } from "react";
import { Grid, Image } from 'semantic-ui-react';
import {ItemCount} from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';


export const ItemDetail =({item})=>{
  const[show,setShow]=useState(true);
  const addHandler=(contador)=>{
    console.log(item,contador)
    setShow(false);
  }

  return <div className='DetailC'>
  <Grid>
  <Grid.Column width={4}>
      <Image src= {item.image} />
    </Grid.Column>
    <Grid.Column width={9}>
    <h2>{item.description}</h2>
    <br></br> <br></br> <br></br>
    <div className= 'Precio'>Oferta {item.price}</div>
    </Grid.Column>
    
    </Grid> 
    
    
    
    {show ? (
    <div>
    <ItemCount stock={7} initial={0} onAdd={addHandler}/>
    
    </div>
    ):(
<div>
<Link to= '/Cart'><Button>Terminar la compra</Button></Link>
</div>
    )}
  </div>
  
};