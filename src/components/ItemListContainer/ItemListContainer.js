import ItemList from '../ItemList/ItemList'
import { useState , useEffect} from 'react'
import { Button } from '@mui/material'
import {Link, useParams} from 'react-router-dom'


const ItemListContainer = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('all')
    const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"]
    
    
    
    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((res) => setData(res.filter((item) => (params.id === 'all' || activeCategory === 'all') ? res : item.category === activeCategory)))
            .finally(() => {
                setLoading(false)
            })
    }, [params.id, activeCategory])


   
 
    return (
        <>   
                
            

        <div className='category'>

            <Link onClick={()=>{setActiveCategory('all')}} className='link' to={`/category/ViewAll`}>

                <Button color={(params.id === 'ViewAall') }  >VIEW ALL</Button>

            </Link>

            {
                categories.map((category) => {
                    return(
                        <Link 
                        onClick={()=>{setActiveCategory(category)}} 
                        className='link' 
                        to={`/category/${category}`}
                        key={category}>

                            <Button 
                            color={(activeCategory === category && params.id !== "all") && 'secondary'} 
                            >{category}</Button>

                        </Link>
                    )
        
                })
            }
                
                
                </div>

                <ItemList datos={data} loader={loading} />
            
        </>
    )   
}

export default ItemListContainer