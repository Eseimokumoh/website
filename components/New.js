import React, {useState} from 'react';
import './New.css';
import { setDoc, doc, serverTimestamp } from "firebase/firestore"; 
import {auth, db} from '../components/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function New({inputs}) {
  const [file, setFile] = useState('');
  const [data, setData] = useState({});
  const [percentage, setPercentage] = useState(null);
  const navigate = useNavigate();



  const handleInput=(e)=>{
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value}); 
  }

  const handleAdd = async (e)=> {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password,
      );
      await setDoc(doc(db, "users", response.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }    
  };

 return(
  <div className='new'>
  <Header/>
  <div className='newContainer'>
        <div className='new-top'>
          <h3>New User</h3>
        </div>
        <div className='new-bottom'>
          
          <div className='new-right'>
          <form onSubmit={handleAdd}>    
              {inputs.map((input)=>(
              <div className='formInput' key={input.id}>
                <label> {input.label} </label>
                <input 
                id={input.id}
                type={input.type} 
                placeholder={input.placeholder} 
                onChange={handleInput}                  
                />
                </div>
    ))}
    <button className='form-btn' type='submit' >Sign Up</button>
    </form>
    </div>
  </div> 
  </div>
  <Footer/>
  </div>
  )
}

export default New