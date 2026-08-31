import { useState } from "react";
import './App.css'
function Counter(){
    // let count=0;
    

    let [count,setcount]=useState(0);  //hook
    let [name,setName]=useState("Aman");
    let [theme,setTheme]=useState("light");
    let [student,setstudent]=useState({name:"Ritik",age:19});
    let [fruit,setfruit]=useState(["apple","banana","mango"]);
    // count->variable, setcount->function use to change state of the variable, useState-> give the intitial value in it
    function handleClick(){
        // setcount(count+1);
        setcount(prev=>prev+1); //checkes the previous value/state before updating
        setcount(prev=>prev+1);
        setcount(prev=>prev+1);
        
    }
    function handleName(){
        setName(name=="Aman"?"Rahul":"Aman");
    }
    function handleTheme(){
        setTheme(theme=="light"?"dark":"light")
    }
    function handleLastName(){
        setstudent({...student,lastname:"Nishad"})
    }
    function handleFruits(){
        setfruit([...fruit,"orange"])
    }
    return(
        <>
        <div className={theme=="light"?"light":"dark"} style={{border:"2px solid red"}}>
            <button onClick={handleTheme}>{theme=="light"?"dark":"light"}</button>
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>ADD</button>
            <h1>Name: <span className={name=="Aman"?"chColor1":"chColor2"}>{name}</span></h1>
            <button onClick={handleName}>Change Name</button>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.lastname?student.lastname:"Dont have Last Name"}</p>
            <button onClick={handleLastName}>Add Last Name</button>

            <ul>
                {fruit.map(fruit=>{
                    return <li key={fruit}>{fruit}</li>
                })}
            </ul>
            <button onClick={handleFruits}>Add Fruits</button>
            
        </div>
        </>
    )
}

export default Counter
