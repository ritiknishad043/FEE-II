import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, double, reset } from "./redux/counterSlice";
import Navbar from "./Navbar";
import store from "./redux/store";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
          
            <h1>App component</h1>
            <h2>{count}</h2>

            <button onClick={() => dispatch(increment())}>Increment</button>

            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <button onClick={() => dispatch(double())}>Double</button>

            <button onClick={() => dispatch(reset())}>Reset</button>

            <Navbar />
        </>
    );
}

export default App;