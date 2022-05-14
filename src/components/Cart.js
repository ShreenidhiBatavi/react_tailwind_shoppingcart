import React from 'react'
import { ContextProvider } from '../context/globalState'
import Product from './Product'

const Cart = () => {
    const {cart}=ContextProvider()
    
   return (
    <div>
        {cart.map((product)=>(
            <div className='flex bg-orange-500 mt-28 p-2 justify-center'>
            <div className='bg-gray-300 p-3'>
                <img className='  w-auto h-48 object-scale-down' src={product.image}/>
            </div>
            <div className='bg-blue-300 p-3'>
                <div className='text-black text-2xl'>
                    {product.title}
                </div>
                <div className='text-black text-lg mt-3'>
                    {product.category}
                </div>
                <div className='text-black mt-3 text-lg'>
                    {product.price} Rs
                </div>
                <div></div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Cart