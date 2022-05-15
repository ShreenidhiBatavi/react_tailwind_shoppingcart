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
        <div className=' min-h-screen bg-gray-600 relative'>
         
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/singleProduct" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </Router>
            {/* <footer className='bg-gray-500 text-gray-300 flex justify-center items-center sticky w-full left-0 bottom-0'>
              <h1>Made by shrinidhi</h1>
            </footer> */}

        </div>
      </GlobalProvider>
      
    </>
  );
}

export default App;
