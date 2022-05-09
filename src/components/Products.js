import React from 'react'
import { ContextProvider } from '../context/globalState'
import Product from './Product'
const Products = () => {
    const {products}=ContextProvider()
    console.log(products)
  return (
    <>
        <div className=' grid lg:grid-cols-4 container mx-auto mt-12 gap-10 justify-center items-center'>
            {products.map((product)=>(
                <>
                    <Product key={product.id} product={product}/>
                </>
            ))}
        </div>
    </>
  )
}

export default Products