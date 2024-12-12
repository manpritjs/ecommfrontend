'use client'
import { submitLogin } from '@/app/actions'
import FormCell from "./FormCell"
import {useState} from 'react'

function LoginForm(){
    const [user, setUser] = useState({email:"", password:""})

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }
    return(
        <form className="w-1/2" action={submitLogin}>
            <h1>Login Form</h1>
            <FormCell label="Email"
                      placeholder="Enter Your Email"
                      name = "email" 
                      type = 'email'
                      value = {user.email}
                      onChange = {handleChange} />  

             <FormCell label="Password"
                      placeholder="Enter Your Password"
                      name = "password" 
                      type = 'password'
                      value = {user.password}
                      onChange = {handleChange} />  
            <button>Submit</button>
        </form>
    );
}
export default LoginForm;