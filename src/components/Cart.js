import React from 'react'
import { ContextProvider } from '../context/globalState'
import Product from './Product'

const Cart = () => {
    const {cart}=ContextProvider()
    
   return (
    <div>
        {cart.map((product)=>(
            <div className='flex bg-orange-500 mt-28 p-6'>
            <div>
                <img className=' w-96 h-48 object-scale-down' src={product.image}/>
            </div>
            <div className='bg-blue-300'>
                <div className='text-black text-2xl'>
                    {product.title}
                </div>
                <div>
                    {product.price} Rs
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Cart