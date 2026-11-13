import { useSelector, useDispatch } from "react-redux";

function Navbar() {
    const a = useSelector((state) => state.counter.value);
    return (
        <>
            <h2>Navbar Component</h2>
            <h3>{a}</h3>
        </>
    );
}

export default Navbar;