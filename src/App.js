
import './App.css';
import Navbar from './components/NavBar';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <h1>ShooStore</h1>
        <Navbar/>
        <ItemList/>
    </div>
  );

}

export default App;
