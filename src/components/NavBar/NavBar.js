
import './Navbar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import  zap from'../img/zap.jpg'
import Publicidad from '../Publicidad/Publicidad';

          const Navbar=()=>{
    return ( <div className='headerApp'>

        <Image className='banner'  src={zap}  />

          <nav className="NavbarItems">
    <ul>
      <li><Link to='/'><Button className='buttonB'>  <Icon name='home' size='large' />Home</Button></Link></li>
      <li><Link to= '/AboutUs'><Button className='buttonB'> <Icon name='user' size='large' />About Uss</Button></Link></li>
      <li><Link to= '/Contact'><Button className='buttonB'><Icon name='mail outline' size='large' />Contact</Button></Link></li>
      <li> <Button className='buttonB'><CartWidget/></Button></li>
    </ul>
    </nav>
  
<Publicidad/>
    </div>
    )
  }

export default Navbar;