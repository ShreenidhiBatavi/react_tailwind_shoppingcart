import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <h1 className='p-3'>Shopping Cart</h1>
            <div className='flex items-center'>
             <FaShoppingCart/> <span className='mr-10 ml-2'>0</span>
            </div>
        </div>
    </>
  )
}

export default Navbar