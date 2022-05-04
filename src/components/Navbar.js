import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center bg-red-500'>
            <h1 className='p-3 text-white text-xl'>Shopping Cart</h1>
            <div className='flex items-center'>
             <FaShoppingCart color='white' /> <span className='mr-10 ml-2 text-xl text-white font-bold'>0</span>
            </div>
        </div>
    </>
  )
}

export default Navbar