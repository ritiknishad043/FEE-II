function User({name,setName}){
    function handleChange(){
        setName(e.target.value)
    }
    return(
        <>
            <h1>User Data</h1>
            <input type="text" onChange={handleChange} />
            <h2>User Name is :{name}</h2>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}
export default User;