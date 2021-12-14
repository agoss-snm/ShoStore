import React, {useState } from "react";
import { Grid, Image } from 'semantic-ui-react';
import {ItemCount} from '../ItemCount';
import './ItemDetail.css';


export const ItemDetail =({item})=>{
  
 

  return <div className='DetailC'>
  <Grid>
  <Grid.Column width={4}>
      <Image src= {item.img} />
    </Grid.Column>
    <Grid.Column width={9}>
    <h4>{item.description}</h4>
    <>{item.price}</>
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
