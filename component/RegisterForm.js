'use client'
import { submitRegister } from '@/app/actions'
import FormCell from "./FormCell"
import {useState} from 'react'

function RegisterForm(){
    const [user, setUser] = useState({name:"", email:"", password:"", mob:"", add:""})

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }
    console.log(user)
    return(
        <form className="w-1/2" action={submitRegister}>
            <h1>Registration Form</h1>
            <FormCell label="Name"
                      placeholder="Enter Your Name"
                      name = "name" 
                      type = 'text'
                      value = {user.name}
                      onChange = {handleChange} /> 

            <FormCell label="Email"
                      placeholder="Enter Your Email"
                      name = "email" 
                      type = 'email'
                      value = {user.email}
                      onChange = {handleChange} />  

            <FormCell label="Mobile Number"
                      placeholder="Enter Your Mobile Number"
                      name = "mob" 
                      type = 'text'
                      value = {user.mob}
                      onChange = {handleChange} /> 

            <FormCell label="Password"
                      placeholder="Enter Your Password"
                      name = "password" 
                      type = 'password'
                      value = {user.password}
                      onChange = {handleChange} />  

             <FormCell label="Address"
                      placeholder="Enter Your Address"
                      name = "add" 
                      type = 'text'
                      value = {user.add}
                      onChange = {handleChange} /> 
            
            <button>Submit</button>
        </form>
    );
}
export default RegisterForm;