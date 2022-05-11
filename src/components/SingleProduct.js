import React from 'react'
import { useLocation } from 'react-router-dom'
import { ContextProvider } from '../context/globalState'
const SingleProduct = () => {
  const location=useLocation()
  const {cart,setCart}=ContextProvider()
  const product=location.state
  console.log(product)
  return (
    <div className=''>
        <div className='bg-white lg:w-3/4 mx-auto lg:grid grid-cols-2 lg:mt-10 rounded-lg shadow-2xl p-3'>
          <div className='p-10 m-10'>
              <img className='object-contain ' src={product.image} alt="product image"/>
           </div>
           <div className=' flex flex-col justify-start mt-12'>
              <h1 className='lg:text-2xl text-lg p-3'>{product.title}</h1>
              <h2 className='lg:text-lg p-3'>category: {product.category}</h2>
              <p className='lg:text-lg text-justify p-3'>
                {product.description}
              </p>
              <h2 className='text-lg text-justify p-3 '>price : {product.price} RS </h2>
              <button onClick={()=>setCart([...cart,product])} className='bg-red-500 mx-5 text-white font-bold h-10 p-2 lg:mt-16 mt-2 shadow-lg'>
                Add to cart
              </button>
           </div>
        </div>
    </div>
  )
}

export default SingleProduct