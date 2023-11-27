import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        try {
            // Making a POST request to the login endpoint
            const res = await axios.post("/auth/login", {
                // Extracting values from the refs
                username: userRef.current.value,
                password: passwordRef.current.value,
            });

            // Dispatching a success action and storing user data in the context
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            // Dispatching a failure action in case of an error
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            {/* Login title */}
            <span className="loginTitle">Login</span>

            {/* Login form */}
            <form className="loginForm" onSubmit={handleSubmit}>
                {/* Username input */}
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />

                {/* Password input */}
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />

                {/* Login button */}
                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>

            {/* Link to the registration page */}
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}
