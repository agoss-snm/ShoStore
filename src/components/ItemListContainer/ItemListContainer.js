import ItemList from '../ItemList/ItemList'
import { useState , useEffect} from 'react'
import { Button } from '@mui/material'
import {Link, useParams} from 'react-router-dom'
import './itemlistcontainer.css'

//firebase import
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';



const ItemListContainer = ({title}) => {
    const params = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('all')
    const categories = ['Sports', 'Street-Style']
    
    
    useEffect(() => {
        setLoading(true)
        const getData = async() => {
            const dataFirestore = await getDocs(collection( db, 'productos'))
            const productsFirestore = dataFirestore.docs.map(doc => {
                let product = doc.data()
                product.id = doc.id
                return product})
            setData(productsFirestore.filter((item) => (params.id === 'all' || activeCategory === 'all') ? 
                    productsFirestore : 
                    item.category === activeCategory))
            setLoading(false)
            
        }
        getData()
        
        
    }, [params.id, activeCategory, data.id])

    return (
        <>   
                
            

        <div className='category'>

            <Link onClick={()=>{setActiveCategory('all')}} className='link' to={`/category/ViewAll`}>

                <Button className='buttonE' color={(params.id === 'ViewAall') }  >VIEW ALL</Button>

            </Link>

            {
                categories.map((category) => {
                    return(
                        <Link 
                        onClick={()=>{setActiveCategory(category)}} 
                        className='link' 
                        to={`/category/${category}`}
                        key={category}>

                            <Button className='buttonE'
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