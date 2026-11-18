import { useState } from 'react'
import { useEffect } from 'react'
import Infinitescroll from './Infinitescroll'


function App() {
  // const [user, setUsers]=useState([])
  // const [skip, setSkip]=useState(0)
  // const [no, setNo]=useState(1)
  // const [search,setSearch]=useState("");
  // const [query, setQuery] = useState("")

  // useEffect(()=>{
  //   fetch(`https://dummyjson.com/users/search?limit=5&skip=${skip}&q=${query}`)
  //   .then((res) =>{
  //     console.log(res)
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     console.log(data);
  //     setUsers(data.users)
  //   });
  // },[skip,query])

  // function handleNext(){
  //   setSkip(skip+5)
  //   setNo(no+1);

    
  // }
  // function handlePrev(){
  //   if(skip==0){
  //     setSkip(0)
  //   }
  //   else{
  //     setSkip(skip-5)
  //   }
  //   setNo(no-1);
  // }

  // function handleInput(e){
  //   setSearch(e.target.value)
  // }

  // function handleSearch() {
  //   setSkip(0)
  //   setNo(1)
  //   setQuery(search)
  // }

  ////////////////////////////////////////////////////////////////////

  const [name, setName]=useState("")
  const [getbyname,setgetbyname]=useState([])
  const [debouncename,setdebouncename]=useState("")

  useEffect(()=>{
    let timer=setTimeout(()=>{
      setdebouncename(name)
    },500)

    //cleanup function runs before the useffect is about to run again
    return ()=>clearTimeout(timer);
  },[name])

  useEffect(()=>{
    fetch(`https://dummyjson.com/users/search?q=${name}`)
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
      setgetbyname(data.users); 
    });
  },[debouncename])

  return (
    <>
      {/* <h1>API</h1>
      <input type="text" value={search} onChange={handleInput}/>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {user.map((user) => ( 
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>

      <button onClick={handleNext} disabled={skip>=205}>Next</button>
      <p>Page No. {no}</p>
      <button onClick={handlePrev} disabled={skip==0}>Previous</button> */}


      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


      <h1>All Users</h1>
      <input type="text" placeholder='Search Name' value={name} onChange={(e)=>setName(e.target.value)}/>

      <ol>
        {getbyname.map((user)=>{
          return(<li key={user.id}>{user.firstName} {user.lastName}</li>)
        })}
      </ol>

      <Infinitescroll/>
    </>
  )
}

export default App