import { useState } from 'react'
import Cart from './Cart'
import Counter from './Counter'
import Formhandling from './Formhandling'
import Hooks from './Hooks'
import Navbar from './component/Navbar'
import {BrowserRouter, Routes, Route} from "react-router"
import About from './component/About'
import Products from './component/Products'
import Login from './component/Login'
import Home from './component/Home'
import Contacts from './component/Contacts'
import Productdetails from './component/Productdetails'
import Product from './Product'
import { UserContext } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'
import CountDisplay from './component/CountDisplay'
import { useReducer } from 'react'
import { ReducerContext } from './context/ReducerContext'
import Input from './input'


function App() {
  // const [count, setCount] = useState(0)
  // const name="Ritik";
  // const age=19;
  // const a=10;
  // const b=10;
  // const flag=true;
  // const obj={
  //   name:"Ritik",
  //   age:19
  // };
  // const fruits=["apple","mango","banana","kivy","watermelon","muskmelon"];
  // const url="https://youtube.com"
  // function greet(){
  //   return "Hello";
  // }

  // const [category, setCategory] = useState("All");
  // const username="Ritik";
  // const lastname="Nishad";
  // const user={
  //   firstname:"Ritik",
  //   lastname:"Nishad"
  // }
  // const [lastname,setLastname]=useState("Nishad");


  // const [count,setCount]=useState(0);
  // function handleIncrement(){
  //   setCount(count+1);
  // }
  // function handleDecrement(){
  //   setCount(count-1);
  // }

  // const [count,dispatch]=useReducer(reducer,0);
  // function reducer(state,action){
  //   if(action.type==="increment"){
  //     return state+action.payload
  //   }
  //   if(action.type==="decrement"){
  //     return state-1
  //   }
  //   if(action.type==="double"){
  //     return state*2
  //   }
  //   return state
  // }
  // function reducer(state,action){
  //   switch(action.type){
  //     case "increment": return state+action.payload;
  //     case "decrement": return state-1;
  //     case "double": return state*2;
  //     default: return state;
  //   }
  // }

  // const [email,setEmail]=useState("");
  // const [password,setPassword]=useState("")
  // const [age,setAge]=useState(0)
  // const [formdata,setFormdata]=useState({
  //   email:"",
  //   password:"",
  //   age:0
  // })

  // function handleChange(e){
  //   const {name,value}=e.target
  //   setFormdata({
  //     ...formdata,
  //     [name]:value
      
  //   })
  //   console.log(formdata.email)
    
  // }


  // function handleEmail(e){
  //   setEmail(e.target.value)
  // }
  // function handlePassword(e){
  //   setPassword(e.target.value)
  // }
  // function handleAge(e){
  //   setAge(e.target.value)
  // }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log(formdata)
  // }

  return (
    <>
        {/* In jsx(javascript XML) file you can write html and javascript together

        <h1>RITIK</h1>
        <p>JSX allows html to be used in javascript</p>
        <h2>G1</h2> */}

       {/* use {} bracket to add js in the html
        use {} to use numbers
        use camelcase to access properties */}

        {/* <p>Name: {name}</p>
        <input type="email" maxLength={100}/>
        <p className="ab">Ritik</p>
        <p>Age: {age}</p>
        <p>Sum = {a+b}</p>
        <p>{greet()}</p> */}

        {/* <input type="text" />  //it is a self closing tag */}
        {/* functional components ->hooks
        class based components */}

        {/* <p>{flag?"Ritik":"Nishad"}</p>
        <p>{obj.name}</p>
        <p>{fruits.join(", ")}</p>
        <p style={{color:"Blue", fontSize:"100px"}}>G1 Studnet</p>
        <a href={url}>Google</a>
        <img style={{height:"400px", width:"400px",margin:"auto"}} src={heroImg} alt="" />
        <a href={url} target='_blank'><img style={{height:"200px", width:"200px"}} src={reactLogo} alt="" /></a>
        <ul style={{margin:"auto"}}>
          <li>{fruits[0]}</li>
          <li>{fruits[1]}</li>
          <li>{fruits[2]}</li>
          <li>{fruits[3]}</li>
          <li>{fruits[4]}</li>
          <li>{fruits[5]}</li>
        </ul> */}

        {/* <ul style={{margin:"auto"}}>
          {fruits.map((fruit,index)=>{
            return(<li key={index}>{fruit}</li>)
          })}
        </ul> */}

          {/* <br />
          <Productcard name="Iphone" description="Good Phone" price={80000} available={false} />
          <br />
          <Productcard name="Samsung Galaxy S26" description="Best Mobile Phone" price={120000} available={true} /> */}

        {/* <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Computers">Computers</option>
        <option value="Audio">Audio</option>
        <option value="Gaming">Gaming</option>
        <option value="Mobile">Mobile</option>
        <option value="Wearables">Wearables</option>
        <option value="Accessories">Accessories</option>
        <option value="Storage">Storage</option>
        <option value="Office">Office</option>
        <option value="Networking">Networking</option>
        <option value="Home">Home</option>
      </select>
        <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly",gap:"20px",fontSize:"20px"}}>
          <Cart category={category} />
        </div> */}

        {/* <Counter/> */}
        {/* <Formhandling/> */}
        {/* <Hooks/> */} 

        {/* <BrowserRouter>
          <Navbar username={username} lastname={lastname}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products/:id" element={<Productdetails  />}/>
          </Routes>
          <Contacts/>
        </BrowserRouter> */}
        {/* <Product/> */}

        {/* <UserContext.Provider value={{username,lastname}}>
          <h1>App Component</h1>
          <Navbar/>
        </UserContext.Provider> */}

        {/* <UserContext.Provider value={user}>
          <h1>App Component</h1>
          <Navbar/>
        </UserContext.Provider> */}

        {/* <ThemeProvider>
          <h1>App Component</h1>
          <Navbar/>
        </ThemeProvider> */}
          

        {/* <ReducerContext.Provider value={{count,dispatch}}> */}
          {/* <h1>App Component</h1> */}
          {/* <h2>{count}</h2> */}
          {/* <button onClick={handleIncrement}>Increase</button> */}
          {/* <button onClick={handleDecrement}>Decrease</button> */}
          {/* <button onClick={()=>dispatch({type:"increment",payload:10})}>increase</button> */}
          {/* <button onClick={()=>dispatch({type:"decrement"})}>decrease</button> */}
          {/* <CountDisplay count={count} dispatch={dispatch}/> */}
          {/* <form onSubmit={handleSubmit}> */}
            {/* <label>Email:</label>
            <input type="email" value={formdata.email} name="email" onChange={handleChange}/>
            <label>Password:</label>
            <input type="password" value={formdata.password} name="password" onChange={handleChange}/>
            <label>Age:</label>
            <input type="number" min="0" max="50" value={formdata.age} name="age" onChange={handleChange} /> */}

            {/* <input lable="Email" name='email' type="email" placeholder='Enter your Email' value={formdata.email} onChange={handleChange}/>
            <input lable="Password" name='password' type="password" placeholder='Enter your Password' value={formdata.password} onChange={handleChange}/>
            <input lable="Age" name='Age' type="Age" min="0" max="50" placeholder='Enter your Age' value={formdata.age} onChange={handleChange}/>
            <button type='submit'>Submit</button>
          </form>  */}
        {/* </ReducerContext.Provider>  */}

        
        
        
    </>
  )
}

export default App