import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextProvider } from '../context/globalState'
const Product = ({product}) => {
    
    const navigate=useNavigate()
    const {cart,setCart}=ContextProvider()
    
    const addToCart=(product)=>{
        setCart([...cart,product])
    }
   return (
    <>
       <div className='shadow-xl bg-white p-2 lg:mx-0 mx-12 rounded-lg'>
            <img className='object-scale-down h-52 w-full mt-5' src={product.image}/>
            <h1 className='mt-2 p-4 font-bold'>{product.title}</h1>
            <h2 className=' p-4 font-bold'>Price  {product.price} RS</h2>
            <div className='flex justify-between p-2'>
                <button onClick={()=>navigate('/singleProduct',{state:product})} className='w-40 h-10 p-1 bg-red-500 text-white rounded mx-1 hover:bg-red-600 hover:font-bold'>
                    View
                </button>
            
                 <button onClick={()=>addToCart(product)} className='w-40 p-1 h-10 bg-red-500 text-white rounded mx-1 hover:bg-red-60 hover:font-bold'> 
                        Add to cart
                  </button>
             </div>
         </div>
     </>
  )     
}

export default Product