import { useReducer } from 'react';

const initialState = {
    email: "",
    password: "",
    name: "",
    age: "",
    error: {}
};

function formreducer(state, action) {
    switch (action.type) {

        case "changeemail":
            return {
                ...state,
                email: action.value
            };

        case "changepassword":
            return {
                ...state,
                password: action.value
            };

        case "changename":
            return {
                ...state,
                name: action.value
            };

        case "changeage":
            return {
                ...state,
                age: action.value
            };

        case "seterror":
            return {
                ...state,
                error: action.value
            };

        default:
            return state;
    }
}

function App() {

    const [formdata, dispatch] = useReducer(
        formreducer,
        initialState
    );

    function handleemail(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "email") {
            dispatch({
                type: "changeemail",
                value: value
            });
        }
        else if (name === "password") {
            dispatch({
                type: "changepassword",
                value: value
            });
        }
        else if (name === "name") {
            dispatch({
                type: "changename",
                value: value
            });
        }
        else if (name === "age") {
            dispatch({
                type: "changeage",
                value: value
            });
        }
    }

    function validation() {
        const newerror = {};

        if (!formdata.email.trim()) {
            newerror.email = "Email is required";
        }

        if (!formdata.password.trim()) {
            newerror.password = "Password is required";
        }
        else if (formdata.password.length < 8) {
            newerror.password = "Password must have at least 8 characters";
        }

        dispatch({
            type: "seterror",
            value: newerror
        });

        return Object.keys(newerror).length === 0;
    }

    function handlesubmit(e) {
        e.preventDefault();

        if (validation()) {
            console.log(formdata.email);
            console.log(formdata.password);
            console.log(formdata.name);
            console.log(formdata.age);
        }
    }

    return (
        <>
            <h1>Form Handling using useReducer</h1>

            <form onSubmit={handlesubmit}>

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formdata.email}
                    onChange={handleemail}
                />
                <p>{formdata.error.email}</p>

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={formdata.password}
                    onChange={handleemail}
                />
                <p>{formdata.error.password}</p>

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formdata.name}
                    onChange={handleemail}
                />

                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    placeholder="Enter Your Age"
                    value={formdata.age}
                    onChange={handleemail}
                    min="0"
                    max="50"
                />

                <button type="submit">Submit it</button>

            </form>
        </>
    );
}

export default App;