
//style
import './App.css';
//Components
import {CartProvider} from './components/CartContext/cartContext';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Slogan from './components/slogan/Slogan';

function App() {
  return (
    <div className="App">
      <CartProvider>
       <AppRouter/>
       </CartProvider>
       <Footer/>
    </div>
  );
}

export default App;