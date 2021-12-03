import ItemCount from './ItemCount';



const ItemListContainer=({greetings})=>{
    
    return (
        <div>
        {greetings}
        <ItemCount stock={7} initial={0}/>
        </div>
    );
        };
    export default ItemListContainer;