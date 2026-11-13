import { useContext } from "react";
import { ReducerContext } from "../context/ReducerContext";

// function CountDisplay({count,setCount}){
//     function handleDouble(){
//         setCount(count*2);
//     }
//     return(
//         <>
//             <h1>Count Display</h1>  
//             <h2>{count}</h2>  
//             <button onClick={handleDouble}>Double the count</button>
//         </>
//     )
// }

// function CountDisplay({count,dispatch}){
//     return(
//         <>
//             <h1>Count Display</h1>  
//             <h2>{count}</h2>  
//             <button onClick={()=>dispatch({type:"double"})}>Double the count</button>
//         </>
//     )
// }

function CountDisplay(){
    const {count,dispatch}=useContext(ReducerContext);
    return(
        <>
            <h1>Count Display</h1>  
            <h2>{count}</h2>  
            <button onClick={()=>dispatch({type:"double"})}>Double the count</button>
        </>
    )
}

export default CountDisplay;