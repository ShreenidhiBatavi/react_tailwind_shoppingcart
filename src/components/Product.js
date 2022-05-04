import React from 'react'
import { ContextProvider } from '../context/globalState'
const Product = () => {
    const {products}=ContextProvider()
    
  
  return (
    <>
        <div className='bg-blue-300 grid lg:grid-cols-4 justify-center items-center'>
            {products.map((prod)=>(
                <>
                    <div className='bg-orange-200 h-72'>
                        <img className="w-full h-42"src={prod.image}/>
                         <h1>{prod.title}</h1>
                         <h2>{prod.price}</h2>
                    </div>
                </>
            ))}
        </div>
    </>
  )     
}

export default Product