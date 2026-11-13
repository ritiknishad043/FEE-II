import {Link} from "react-router"
import Profile from "../Profile";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// function Navbar({username,lastname}){ 
//     return(
//         <>
//             {/* <a href=""></a> */}
//             <nav style={{display:"flex", justifyContent:"space-evenly"}}>
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/products">Product</Link>
//                 <Link to="/login">Login</Link>
//             </nav>
//             <Profile username={username} lastname={lastname}/>
//         </>
//     )
// }

// function Navbar(){ 
//     return(
//         <>
//             <Profile/>
//         </>
//     )
// }

function Navbar(){ 
    const {theme,toggleTheme}=useContext(ThemeContext)
    return(
        <>
            <h1>Nav Bar</h1>
            <h2>Theme: {theme}</h2>
            <button onClick={toggleTheme}>Change theme</button>
        </>
    )
}
export default Navbar;