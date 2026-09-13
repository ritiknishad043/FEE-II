import React, { useState, useEffect, useRef } from 'react'

function Hooks() {

    const[count, setCount] = useState(0);
    const[products, setProducts] = useState([]);
    const[limit, setLimit] = useState(10);

    const rendercount=useRef(0);
    rendercount.current++;        //an object is made of rendercount and .current is used to change it value
    const inputref=useRef();

    function handleInc(){
        setCount(count + 1);
    }
    function handleDec(){
        setCount(count - 1);
    }
    function handleClick(){
        console.log(inputref.current.value);
        
    }

    useEffect(() => {
        fetch("https://dummyjson.com/Products").then(
        (response) => response.json()).then(
            (data) => setProducts(data.products))
    },[])

  return (
    <>
        <h1>Count: {count}</h1>
        <h1>Render Count: {rendercount.current}</h1>
        <button onClick={handleInc} style={{margin:"10px"}}>Increment</button>
        <button onClick={handleDec} style={{margin:"10px"}}>Decrement</button>
        <input ref={inputref} type="text" />
        <button onClick={handleClick}>Click me</button>
        <ul>
            {products.map((product) =>{
                return <li key={product.id}>{product.title}</li>
            })}
        </ul>
    </>
  )
}

export default Hooks