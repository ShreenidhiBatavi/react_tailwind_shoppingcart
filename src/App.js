import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/globalState';
import Product from './components/Product';
function App() {
  return (
    <>
    <GlobalProvider>
       <Navbar/>
       <Product/>
    </GlobalProvider>
    </>
  );
}

export default App;
