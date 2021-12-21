import React, {useState } from "react";
import { Grid, Image } from 'semantic-ui-react';
import {ItemCount} from '../ItemCount/ItemCount';
import './ItemDetail.css';


export const ItemDetail =({item})=>{
  
 

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
    
    <div>
    <ItemCount stock={7} initial={0}/>
    </div>
<div>
<button>Terminar la compra</button>

</div>
  </div>
};
