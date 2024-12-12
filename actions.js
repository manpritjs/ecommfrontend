'use server'
import axios from 'axios';
import { cookies } from 'next/headers';

export async function submitRegister(formData){

    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        mob : formData.get('mob'),
        password: formData.get("password"),
        add : formData.get("add")
    }
    
    try {
        const response = await axios.post('http://localhost:3001/register', rawFormData);
        
        console.log('Response:', response.data);

      } catch (error) {

        console.error('Error:', error);
      }   

};


export async function submitLogin(formData){

  const rawFormData = {
      email: formData.get('email'),
      password: formData.get("password"),
  }
  console.log(rawFormData)
  
  try {
      const response = await axios.post('http://localhost:3001/login', rawFormData);
      const cookieStore = await cookies()
      cookieStore.set('jwt', response.data.token, {SameSite:"None"})

    } catch (error) {

      console.error('Error:', error);
    }   

};