import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//Pages imports
import CartPage from '../Pages/CartPage/CartPage';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Contact from '../Pages/Contact/Contact';
//Components imports
import Navbar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
// Style 
import './appRouter.css';

export default function AppRouter() {
  return (
       <Router>   
          <header>  
            <Navbar/>
          </header>   
          <Switch>
            <Route exact path='/'><ItemListContainer/></Route>
            <Route path='/category/:categoryId' > <ItemListContainer/> </Route>
            <div className= 'appFondo' >  
              <Route path='/item/:id'><ItemDetailContainer/></Route>
              <Route path='/AboutUs'><AboutUs/></Route>
              <Route path='/Contact'><Contact/></Route>
              <Route path='/cart' ><CartPage/></Route>
            </div>
          </Switch>
        </Router>
  );
}
