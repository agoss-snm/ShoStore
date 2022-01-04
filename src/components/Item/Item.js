
import {Card, Icon, Image} from 'semantic-ui-react';
import { Grid} from 'semantic-ui-react';
import './Item.css';
import {Link} from 'react-router-dom';


      const Item = ( {data}) => {
        return(
          
          <Card.Group className='cardGroup'>
            <Link to='item/:id'><Card className='col-3'>
            <Link to='item/:id'><Image className='image'src={data.image} /> </Link>
                <Card.Content>
                
                <Link to='item/:id'><Card.Header className='price'> ${data.price}</Card.Header> </Link>
                  <Card.Meta>
                  <Link to='item/:id'><a><span className='title'>{data.title}</span></a></Link>
                </Card.Meta>
                <Card.Description>  </Card.Description> 
        
                </Card.Content>
                <Card.Content extra className='extra'>
                    <Icon name='percent' />
                      22  OFF
                   
                </Card.Content>
                </Card></Link>
                </Card.Group>
                
        )
    }

  export default Item;