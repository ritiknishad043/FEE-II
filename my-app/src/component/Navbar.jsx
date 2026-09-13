import {Link} from "react-router"

function Navbar(){
    return(
        <>
            {/* <a href=""></a> */}
            <nav style={{display:"flex", justifyContent:"space-evenly"}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Product</Link>
                <Link to="/login">Login</Link>
            </nav>
        </>
    )
}

export default Navbar;