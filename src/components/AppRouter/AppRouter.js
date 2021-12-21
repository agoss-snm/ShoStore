import Navbar from '../NavBar/NavBar';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './appRouter.css';



export default function AppRouter() {
  return (
       <Router>   
         <header>  
         <Navbar/>
         </header>   
         <Switch>
        <Route exact path='/'><ItemList/></Route>
        <Route path='/category/:categoryId' > <ItemList/> </Route>
        <div className= 'appFondo' >
        <Route path='/item/:itemId'><ItemDetailContainer/></Route>
        </div>
        </Switch>
        </Router>
  );

}
