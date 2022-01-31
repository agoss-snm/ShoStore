import {Link} from 'react-router-dom'
// material
import { CircularProgress} from "@mui/material"
//components
import Item from '../Item/Item'
//style
import './ItemList.css'


const ItemList = ({data, loader}) => {
    return(
        <>
        { loader ? <div className='loading'><CircularProgress /></div> : 
        <div className='item'>
         
            {data.map (product => {
                return (
                    <Link className='link' to={`/product/${product.id}`} > 
                    <Item  data={product} key={product.id} />
                    </Link>
                )
            })}
        </div>
        }
        </>
    )
} 
export default ItemList