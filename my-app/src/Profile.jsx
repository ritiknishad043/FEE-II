import React, { useState  } from "react"
import { useContext } from "react";
import useCounter from "./hooks/useCounter"
import {UserContext} from "./context/UserContext"


// function Profile({name,username,lastname}){
//     const {count,increment,decrement}=useCounter(0);
//     return(
//         <>
//             <h1>User Profile</h1>
//             <h2>Profile name is{name}</h2>
//             <p>{count}</p>
//             <button onClick={increment}>increment</button>
//             <button onClick={decrement}>decrement</button>
//             <h2>Username data</h2>
//             <h3>Firstname: {username}</h3>
//             <h3>Lastname: {lastname}</h3>

//         </>
//     )
// }
function Profile({name}){
    // const {username,lastname}=useContext(UserContext)
    const user=useContext(UserContext)
    const {count,increment,decrement}=useCounter(0);
    return(
        <>
            <h1>User Profile</h1>
            <h2>Profile name is{name}</h2>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h2>User data</h2>
            <h3>Firstname:{user.firstname} </h3>
            <h3>Lastname: {user.lastname}</h3>

        </>
    )
}
export default Profile;