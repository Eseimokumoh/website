import React, {useState} from 'react';
import './Signup.css';
import {landrover} from '../assets/index';
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import Header from './Header';
import Footer from './Footer';

function Signup() {
  const [error, setError]= useState(''); 
  const {createUser} = UserAuth();
  const navigate = useNavigate()



  return (
    <div className='signup'>
      <Header/>
        <div className='container'>
         {/* left */}
         <div className='left'>
            <img className='left-img' src={landrover} alt=''/>
         </div>

         {/* right */}
         <div className='right'>
            <h2></h2>
            <p></p>
            <div className='input-container'>
           {/* <form className='login-form' onSubmit={handleSubmit}> */}
              <h3>Create account:</h3>
              <h4>Already have an account : </h4>
              <Link to='/Login'>
              <button className='login-btn' type='submit'>Sign in</button>
              </Link>
              {/*<input className='input-input' type='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
              <input className='input-input' type='password' placeholder='password' onChange={e=>setPassword(e.target.value)}/> */}
              <h4>To create a new account:</h4>
              <Link to='New'>
              <button className='login-btn' type='submit'>Sign Up</button>
              </Link>
              {/*{error && <span className='error-text'>Wrong email or password!</span>}
            </form> */}
              
            </div>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Signup;