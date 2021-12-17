
import Item from '../components/Item';
import React, {useState, useEffect} from 'react';
import { Grid} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';


const ItemList=()=>{
  const [products, setProducts] =useState([]);
  const{categoryId}=useParams()

  useEffect(()=>{
    setTimeout (()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then ((respuesta) => setProducts(respuesta))
    },2000);
},[categoryId]);


return(
  <>
    
  <Grid.Column width={9}>
  <div className='CardContainer'>
    {products.map ((product)=>{
      return <Item key={product.id} prop={product}/>;
    })}
     

      </div>
      </Grid.Column>
    
    </>
  
 
  
);
};
  
  export default ItemList;