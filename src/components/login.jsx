import React from "react";
import Input from "../components/input";

function Login() {
    return (
            <form className='form'>
            <Input
            type = "text"
            placeholder = "Username"
            />
            <Input
            type = "password"
            placeholder = "Password"
            />
           <button
                type="submit">LogIn</button>
            </form>
        );
}



export default Login;