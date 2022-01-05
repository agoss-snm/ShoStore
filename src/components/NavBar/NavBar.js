
import './Navbar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import  bannerZap1 from'../img/bannerZap1.png'

          const Navbar=()=>{
    return ( <div>

        <Image className='banner' src={bannerZap1}  />

          <nav className="NavbarItems">
    <ul>
      <li><Link to='/'><Button className='buttonB'>  <Icon name='home' size='large' />Home</Button></Link></li>
      <li><Link to= '/AboutUs'><Button className='buttonB'> <Icon name='user' size='large' />About Uss</Button></Link></li>
      <li><Link to= '/Contact'><Button className='buttonB'><Icon name='mail outline' size='large' />Contact</Button></Link></li>
      <li> <Button className='buttonB'><CartWidget/></Button></li>
    </ul>
    </nav>
    </div>
    )
  }

export default Navbar;