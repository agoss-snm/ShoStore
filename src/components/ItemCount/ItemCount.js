import React, {useState } from "react";
//Semantic UI
import { Button } from 'semantic-ui-react';
//

export const ItemCount=({stock, onAdd})=>{
    const [itemCount, setItemCount] = useState(0)

    const updateItem = () => {
        
        if(itemCount < stock) {
            setItemCount(itemCount + 1)
            onAdd(itemCount + 1)
        }
    }

    const removeItem = () => {
        itemCount > 0 && setItemCount(itemCount - 1)
    }

    return(
        <div className="item-count__buttons">
            <Button onClick={removeItem}>-</Button>
            <p>{itemCount}</p>
            <Button onClick={updateItem} >+</Button>
        </div>
    )
}

    export default ItemCount; 