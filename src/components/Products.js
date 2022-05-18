import React from 'react'
import { ContextProvider } from '../context/globalState'
import Product from './Product'
import ReactLoading from 'react-loading';
const Products = () => {
    const {products}=ContextProvider()
    console.log(products)
  return (
    <>
       {products.length?<div className=' grid lg:grid-cols-4 container mx-auto mt-12 gap-10 justify-center items-center'>
            {products.map((product)=>(
                <>
                    <Product key={product.id} product={product}/>
                </>
            ))}
        </div>
        :
        <div className='flex justify-center items-center h-screen'>
            <ReactLoading type="spokes" color="white"  height={100} width={100}/>
        </div>}
    </>
  )
}

export default Products