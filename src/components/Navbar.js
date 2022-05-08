import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ContextProvider } from '../context/globalState';
const Navbar = () => {
  const { cart } = ContextProvider()
  console.log(cart)
  return (
    <>
      <div className='flex justify-between items-center bg-red-500 fixed mb-16 left-0 w-full top-0'>
        <h1 className='p-3 text-white text-xl ml-4'>Shopping Cart</h1>
        <Link to="/cart">
          <div className='flex items-center'>
            <FaShoppingCart color='white' /> <span className='mr-10 ml-2 text-xl text-black font-bold bg-white w-8 rounded-full flex justify-center items-center '>{cart.length}</span>
          </div>
        </Link>

      </div>
    </>
  )
}

export default Navbar