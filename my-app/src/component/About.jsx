import useCounter from "../hooks/useCounter";
function About(){
    const {count,increment,decrement} =useCounter();
    return(
        <>
            <h1>About Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default About;
            