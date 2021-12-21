
import { Button } from 'semantic-ui-react';
import React, {useState } from "react";

export const ItemCount=({stock, initial})=>{
    const [counter, setCounter]= React.useState(initial);
    
    function handleIncrement() {
        if(counter < stock){
            setCounter(counter+1);
        }else{
            alert("no hay mas stock")
        }

    }
    
    function handleDecrement() {
        if(counter == 0){
            alert ("Carrito Vacio")
        }else{
        setCounter (counter -1);
    }
}

    return (
        <div className='ItemCount'>
        <div className='ContadorContainer'>
            
            <h1>Cantidad: {counter}</h1>
        
           <Button onClick={handleDecrement}> -</Button>
            <Button onClick={handleIncrement}> +</Button>

           
         </div>

</div>
        );
    };

    export default ItemCount; 