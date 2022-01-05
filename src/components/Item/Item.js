
import {Card, Icon, Image} from 'semantic-ui-react';
import { Button, Label } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react';
import './Item.css';
import {Link} from 'react-router-dom';


      const Item = ( {data}) => {
        return(
          
          <Card.Group className='cardGroup'>
            <Card className='col-4'>
              <div className='image'>
            <Link to='item/:id'><Image  className='Di' src={data.image} /> </Link>
            </div>

            <Card.Meta>
                  <Link to='item/:id'><a><span className='titleD'>{data.title}</span></a></Link>
                </Card.Meta>
                <Card.Content className='cardContent'>
                
                <Link to='item/:id'><Card.Header className='price'> ${data.price} <span className='extra'> <Icon name='percent' />
                      22  OFF</span> </Card.Header> </Link>
                 
                
                 <Card.Description> 
<>
                 <Link to='item/:id'><a><span className='titleD'> <Button content='  Ver Producto' icon='right arrow' labelPosition='right' className='butonC'/> </span></a></Link>
                 </>
                 <>
                 <Link to=''><Button as='div' className='heartButton' labelPosition='center'>
      <Button color='red' >
        <Icon name='heart'  />
        Like
      </Button>
      <Label as='a'  basic color='red' pointing='left'>
        2,048
      </Label>
    </Button> </Link>
    </>
    
    </Card.Description> 
        
                </Card.Content>
                
                </Card>
                
                </Card.Group>
                
        )
    }

  export default Item;