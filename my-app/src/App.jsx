import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Cart from './Cart'
import Counter from './Counter'
import Formhandling from './Formhandling'


function App() {
  const [count, setCount] = useState(0)
  const name="Ritik";
  const age=19;
  const a=10;
  const b=10;
  const flag=true;
  const obj={
    name:"Ritik",
    age:19
  };
  const fruits=["apple","mango","banana","kivy","watermelon","muskmelon"];
  const url="https://youtube.com"
  function greet(){
    return "Hello";
  }

  const [category, setCategory] = useState("All");


  

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
        <Formhandling/>
          
    </>
  )
}

export default App