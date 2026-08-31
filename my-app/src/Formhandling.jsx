import { useState } from "react"

function Formhandling(){
    // const [name,setName]=useState("");
    // const [lastname,setLastName]=useState("");
    const [form,setForm]= useState({});

    function handleChange(e){
        setName(e.target.value);
        
    }
    function handleName(){
        setName("Rahul")
    }
    function handlLastname(){
        setName(e.target.value);
    }
    return(
        <>
            <input type="text" placeholder="Enter Name" onChange={handleChange} value={name} />
            <input type="text" placeholder="Enter LastName" onChange={handlLastname} value={name} />
            <button onClick={handleName}>Change Name</button>
        </>
    )
}

export default Formhandling