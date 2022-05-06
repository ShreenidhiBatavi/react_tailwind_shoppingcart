import './App.css';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/globalState';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <GlobalProvider>
        <div className='bg-gray-600'>
         
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/singleProduct" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </Router>


        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
