import LoginForm from '../component/LoginForm' 
import Link from 'next/link'


function LoginPage(){
    return (
        <div className="w-full">
            <LoginForm/>
            <Link className="w-1/2" href="/register">Don't have an account ? Sign Up </Link>
        </div>
        
    );
}
export default LoginPage