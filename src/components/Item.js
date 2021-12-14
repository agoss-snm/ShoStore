
import {Card, Icon, Image} from 'semantic-ui-react';
import { Grid} from 'semantic-ui-react';


      const Item = ( {prop}) => {
        return(
         
             <Grid.Column width={4}>
          <Card.Group >
            <Card className='col-12'>
              <Image src={prop.image}  wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>{prop.price}</Card.Header>
                  <Card.Meta>
                  <span className='price'>{prop.title}</span>
                </Card.Meta>
                <Card.Description>  </Card.Description> 
        
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='percent' />
                      22  OFF
                    </a>
                   
                </Card.Content>
                </Card>
                </Card.Group>
                </Grid.Column>
                
        )
    }

  export default Item;