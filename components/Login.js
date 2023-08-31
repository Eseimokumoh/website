import React, {useState} from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import { UserAuth } from '../AuthContext'; 
import Header from './Header';
import Footer from './Footer';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState('');
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/Single');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='login'>
    <Header/>
     <form onSubmit={handleSubmit} className='login-form'>
     <h3>Log in to your account:</h3>
    {/* <p>
      Don't have an account yet? {''}
      <Link className='sign-up' to={'/Signup'} >
        Sign Up.
      </Link>
     </p> */}
      <input className='input-input' type='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
      <input className='input-input' type='password' placeholder='password' onChange={e=>setPassword(e.target.value)}/>
      <button className='login-btn' type='submit'>Login</button>
     </form>
     <Footer/>
    </div>
  )
}

export default Login;