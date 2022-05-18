import {createContext,useContext,useState,useEffect} from 'react';
import axios from 'axios'
const GlobalContext=createContext()
export function ContextProvider(){
    return useContext(GlobalContext)
}

export const GlobalProvider=({children})=>{

    const [products,setProducts]=useState([])
    const[cart,setCart]=useState([])

    // api calls
    function getAllProducts(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getAllProducts()
    },[])
    return(
        <GlobalContext.Provider value={{products,cart,setCart}}>
            {children}
        </GlobalContext.Provider>
    )
}