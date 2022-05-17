import React from 'react'
import { ContextProvider } from '../context/globalState'
import Product from './Product'

const Cart = () => {
    const {cart,setCart}=ContextProvider()
    const removeItem=(item)=>{
        console.log(item)
        const c=cart.filter((c)=>c.id!==item.id)
        console.log('after remove',c)
        setCart(c)
    }
    console.log('cart',cart)
    const increaseQty=(item)=>{
        const product=cart.find((p)=>p.id===item.id)
        product.Qty++
        console.log(product.Qty)
        setCart([...cart])

    }
    const decreaseQty=(item)=>{
       const product=cart.find((p)=>p.id===item.id)
       if(product.Qty===1){
           product.Qty=1
       }else{
        product.Qty--
       }
       
       setCart([...cart])

    }
   return (
   cart.length?
   <div className=' mt-12 p-8'>
        {cart.map((product)=>(
            <div className='flex lg:flex-row flex-col bg-white lg:mb-1 shadow-lg mb-2 p-2 lg:w-3/4 mx-auto justify-center'>
            <div className=' mr-5 p-3 '>
                <img className='  w-auto h-48 object-scale-down mx-auto' src={product.image}/>
           </div>
            <div className='p-3 w-full lg:ml-5'>
                <div className='text-black lg:text-2xl'>
                    {product.title}
                </div>
                <div className='text-black text-lg mt-3'>
                    {product.category}
                </div>
                <div className='text-black mt-3 text-lg'>
                    {product.price} Rs
                </div>
                <div className='mt-5 flex lg:flex-row  justify-between'>
                    <div>
                    <button onClick={()=>decreaseQty(product)} className='bg-black text-white w-10 h-10 text-xl'>-</button>
                    <span className='  mx-5 text-xl '>{product.Qty}</span>
                    <button onClick={()=>increaseQty(product)} className='bg-black text-white w-10 h-10 text-xl'>+</button>
                    </div>
                    <div>
                        <button onClick={()=>removeItem(product)} className='bg-red-500 h-10 text-white text-lg p-5 flex justify-center items-center rounded shadow-2xl'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
        ))}
        {cart.length?<div className=' bg-white lg:w-3/4 mx-auto flex justify-end text-xl p-5 border-t-2 border-gray-500'>
                Total : {cart.map(item=>item.price*item.Qty).reduce((acc,crr)=>acc+
                crr)} RS
        </div>:null}
    </div>:<h1 className='text-white  mt-12 p-8 text-xl'>No Items in cart</h1>
  )
}

export default Cart