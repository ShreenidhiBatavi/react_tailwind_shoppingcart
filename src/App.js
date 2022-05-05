import './App.css';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/globalState';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
function App() {
  return (
    <>
      <GlobalProvider>
        <div className='bg-gray-600'>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/singleProduct" element={<SingleProduct />} />
            </Routes>
          </Router>


        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
