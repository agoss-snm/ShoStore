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
    //state of products
    const [prod, setProd] = useState([])
    //
    const [loading, setLoading] = useState(false)
    const [categoria, setCategoria] = useState(['allP'])
    const categories = ['Sports', 'Street-Style', 'Retro', 'Clasics']
    
    
    useEffect(() => {
        setLoading(true)
        
        const getProd = async() => {
            const prodFirestore = await getDocs(collection( db, 'productos'))
            const productsFirestore = prodFirestore.docs.map(doc => {
                let product = doc.data()
                product.id = doc.id
                return product})


            setProd(productsFirestore.filter((item) => (params.id === 'allP' || categoria === 'allP') ? 
                    productsFirestore : 
                    item.category === categoria))
            setLoading(false)
            
        }
        getProd()
        
        
    }, [params.id, categoria, prod.id])

    return (
        <>   
                
            

        <div className='category'>
        <h3 className='categories'>See All Categories Heare</h3>
           

            {
                
                categories.map((category) => {
                    return(<>
                        
                        <Link 
                        onClick={()=>{setCategoria(category)}} to={`/category/${category}`}key={category}>

                            <Button className='buttonE'>{category} </Button>

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