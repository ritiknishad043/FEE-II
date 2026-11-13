import React from "react";
import useFetch from "./hooks/useFetch";
function Product(){
    const{data,loading,error}=useFetch('https://dummyjson.com/products')
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    if(error){
        
    }
    return(
        <>
        <h1>All Products</h1>
        <ol>
            {data.products.map((products)=>{
                return (<li>{products.title}</li>)
            })}
        </ol>
        </>
    )
}
export default Product;