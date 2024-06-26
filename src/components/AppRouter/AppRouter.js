import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//Pages imports
import CartPage from '../Pages/CartPage/CartPage';
import Brands from '../Pages/AboutUs/Brands';
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
            <Navbar/>
          <Switch>
            <Route exact path='/'><ItemListContainer/></Route>
            <Route path='/category/:categoryId' > <ItemListContainer/> </Route>
              <Route path='/item/:id'><ItemDetailContainer/></Route>
              <Route path='/Brands'><Brands/></Route>
              <Route path='/Contact'><Contact/></Route>
              <Route path='/cart' ><CartPage/></Route>
          </Switch>
        </Router>
  );
}
