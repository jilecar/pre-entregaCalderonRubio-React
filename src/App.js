import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a Almacén"/>
    </>
  );
}
export default App;
