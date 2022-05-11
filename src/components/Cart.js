import React from 'react'
import { ContextProvider } from '../context/globalState'
import Product from './Product'

const Cart = () => {
    const {cart}=ContextProvider()
    
   return (
    <div>
        {cart.map((product)=>(
            <div className='flex'>
            <div>
                <img src={product.image}/>
            </div>
            <div>
                <div>
                    {product.title}
                </div>
                <div>
                    {product.price}
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Cart