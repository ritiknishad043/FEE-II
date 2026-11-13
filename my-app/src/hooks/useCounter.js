import React, { useState } from "react";

function useCounter(){
    // const a=initialcount;
    const [count,setCount]=useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count>0){
            setCount(count-1);
        }
    }
    // function reset(){
    //     setCount(a);
    // }
    return {count,increment,decrement}
}
export default useCounter;