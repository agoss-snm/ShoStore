
import {Card, Icon, Image} from 'semantic-ui-react';
import { Grid} from 'semantic-ui-react';
import './Item.css';
import {Link} from 'react-router-dom';


      const Item = ( {prop}) => {
        return(
          
          <Card.Group className='cardGroup'>
            <Card className='col-3'>
              <Image className='image'src={prop.image}  wrapped ui={false} />
                <Card.Content>
                
                  <Card.Header className='price'> ${prop.price}</Card.Header>
                  <Card.Meta>
                  <Link to='item/:id'><a><span className='title'>{prop.title}</span></a></Link>
                </Card.Meta>
                <Card.Description>  </Card.Description> 
        
                </Card.Content>
                <Card.Content extra className='extra'>
                    <Icon name='percent' />
                      22  OFF
                   
                </Card.Content>
                </Card>
                </Card.Group>
                
        )
    }

  export default Item;