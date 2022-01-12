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
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('all')
    const categories = ['Sports', 'Street-Style', 'Retro', 'Clasics']
    
    
    useEffect(() => {
        setLoading(true)
        const getProd = async() => {
            const prodFirestore = await getDocs(collection( db, 'productos'))
            const productsFirestore = prodFirestore.docs.map(doc => {
                let product = doc.data()
                product.id = doc.id
                return product})
            setProd(productsFirestore.filter((item) => (params.id === 'all' || activeCategory === 'all') ? 
                    productsFirestore : 
                    item.category === activeCategory))
            setLoading(false)
            
        }
        getProd()
        
        
    }, [params.id, activeCategory, prod.id])

    return (
        <>   
                
            

        <div className='category'>
        <h3 className='categories'>See All Categories Heare</h3>
           

            {
                
                categories.map((category) => {
                    return(<>
                        
                        <Link 
                        onClick={()=>{setActiveCategory(category)}} 
                        
                        className='link' 
                        to={`/category/${category}`}
                        key={category}>

                            <Button className='buttonE'
                            color={(activeCategory === category && params.id !== "all") && 'secondary'} 
                            >{category}
                            </Button>

                        </Link>
                        </>
                    )
        
                })
            }
                
                
                </div>

                <ItemList datos={prod} loader={loading} />
            
        </>
    )   
}

export default ItemListContainer