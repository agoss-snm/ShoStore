import {Link} from 'react-router-dom';
// Semantic UI
import {Card, Icon, Image} from 'semantic-ui-react';
import { Button} from 'semantic-ui-react'
//Styles
import './Item.css';

const Item= ( {data} ) => {
  
  return(  
    <Card.Group className='cardGroup'>
      <Link to={`/item/${data.id}`}> <Card className='col-4'>
        <div className='imageS'>
          
          <Image  className='Di' src= {data.image}/> 
          <span className='titleD'> Stock : {data.stock}</span>
        </div>

        <Card.Meta>
          <a><span className='titleD'>{data.name}</span></a>
        </Card.Meta>
                
        <Card.Content className='cardContent'>
         
            <Card.Header className='price'> ${data.price} <span className='extra'> <Icon name='percent' />22  OFF</span> </Card.Header>
          
                
        <Card.Description> 
           <a><span className='titleD'> <Button content='  Ver Producto' icon='right arrow' labelPosition='right' className='butonC'/> </span></a>
          
        </Card.Description> 
        
        </Card.Content>
        </Card></Link>



      </Card.Group>
        )
    }

  export default Item;