import RegisterForm from '../component/RegisterForm' 
import Link from 'next/link'


function RegisterPage(){
    return (
        <div className="w-full">
            <RegisterForm/>
            <Link className="w-1/2" href="/login">Already registered ? Pls Login</Link>
        </div>
        
    );
}
export default RegisterPage