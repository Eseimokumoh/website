import React, { useEffect, useState,} from 'react';
import './Single.css';
import Header from './Header';
import {UserAuth} from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import {db} from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import Footer from './Footer';
import {Malouda2, Malouda, bought1,bought3,bought5,
bought6,bought7,bought8,bought9,black1,black2,black3,black4,black5,
white1,white2,white3,white4,white5,white6,white7} from '../assets/index';



function Single() {
  const blues = [
    {
        id: 1,
        image: '',
        name: 'New 2023 Land Rover Range Rover',
        model: 'P400 SE',
        price: 'AED 960,000 ($261,373.82)',
        colour: 'Navy Blue',
        mileage: '14 kmph',
        fuelType: 'Petrol',
        transmission: 'Automatic',
    },
  ]

  const whites = [
    {
        id: 2,
        image: '',
        name: 'New 2023 Land Rover Range Rover',
        model: 'SV',
        price: 'AED 1,480,000 ($402,937.10)',
        colour: 'White',
        mileage: '14 kmph',
        fuelType: 'Petrol',
        transmission: 'Automatic',
    },
  ]


  const [users, setUsers] = useState([]);
  const {user, logout} = UserAuth();
  const navigate = useNavigate();



  useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "users"), 
      (snapShot) => {
        let users = [];
        snapShot.docs.forEach((doc)=>{
          users.push({id : doc.id, ...doc.data()});
      });
      setUsers(users);
      console.log(users);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
      setUsers(users);
    };
  }, []);


  const handleLogout = async () => {
    try {
      await logout();
      navigate('/Signup');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  }

  
  return (
    <div className='single'>
      <div className='singleContainer'>
        <Header/>
        <button className='single-button' onClick={handleLogout}>Logout</button>

        <div className='single-top'>
          <div className='single-left'>
            <div className='editButton'>Edit</div>
            <h2 className='single-title'>Information</h2>
            
    
                <div className='single-item' key={user.id}>
              <img src={Malouda2}
                alt='' className='itemImg'
              />
              <div className='details'>
                <h2 className='itemTitle'>Alexander John</h2>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>{user.email}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Croatia</span>
                </div>
              </div>
            </div>
          
          </div>
        </div>     
      </div>

    <div>
          <div>
            <h1 className='greeting'>Congratulations!!!</h1>
            <h3 className='greeting-span'>Your 2023 Land Rover Range Rover Navy Blue,Black(P400 SE)
                and 2023 Range Rover White SV has been shipped to the Canada!!!
            </h3>
            <p className='greeting-p'>Notifications will be sent to your email as soon as possible.
              Thank you for your patronage Mr. Alexander John.
            </p>
          </div>
          {blues.map((blue)=>(
        <div className='purchase' key={blue.id}>
          <div >
            <img className='grid-img' src={bought5} alt='Front view'/>
          </div>
          <h2 >name: {blue.name}</h2>
          <span>model: {blue.model}</span>
          <span>price: {blue.price}</span>
          <span>colour: {blue.colour}</span>
          <span>mileage: {blue.mileage}</span>
          <span>fuel type: {blue.fuelType}</span>
          <span>transmission: {blue.transmission}</span>
        </div>
        ))}
        <div className='grid'>
            <div className='grid-img'><img className='img' src={bought1} alt='Back view'/></div>
            <div className='grid-img'><img className='img' src={bought8} alt='Side view'/></div>
            <div className='grid-img'><img className='img' src={bought9} alt='Side view'/></div>
            <div className='grid-img'><img className='img' src={bought3} alt='interior'/></div>
            <div className='grid-img'><img className='img' src={bought6} alt='interior'/></div>
            <div className='grid-img'><img className='img' src={bought7} alt='interior'/></div>
        </div>
    </div>     

    {whites.map((white)=>(
        <div className='purchase' key={white.id}>
          <div >
            <img className='grid-img' src={white6} alt='Front view'/>
          </div>
          <h2 >name: {white.name}</h2>
          <span>model: {white.model}</span>
          <span>price: {white.price}</span>
          <span>colour: {white.colour}</span>
          <span>mileage: {white.mileage}</span>
          <span>fuel type: {white.fuelType}</span>
          <span>transmission: {white.transmission}</span>
        </div>
        ))}
        <div className='grid'>
            <div className='grid-img'><img className='img' src={white1} alt='Back view'/></div>
            <div className='grid-img'><img className='img' src={white3} alt='Side view'/></div>
            <div className='grid-img'><img className='img' src={white7} alt='Side view'/></div>
            <div className='grid-img'><img className='img' src={white2} alt='interior'/></div>
            <div className='grid-img'><img className='img' src={white4} alt='interior'/></div>
            <div className='grid-img'><img className='img' src={white5} alt='interior'/></div>
        </div>

        <div className='purchase'>
          <div >
            <img className='grid-img' src={black3} alt='Front view'/>
          </div>
          <h2 >name: New 2023 Land Rover Range Rover </h2>
          <span>model: P400 SE </span>
          <span>price: AED 960,000 ($261,373.82) </span>
          <span>colour: Black</span>
          <span>mileage: 14kmph</span>
          <span>fuel type: Petrol</span>
          <span>transmission: Automatic</span>
        </div>
        <div className='grid'>
            <div className='grid-img'><img className='img' src={black1} alt='Back view'/></div>
            <div className='grid-img'><img className='img' src={black2} alt='Side view'/></div>
            <div className='grid-img'><img className='img' src={black4} alt='Side view'/></div>
            <div className='grid-img'><img className='img' src={black5} alt='interior'/></div>
        </div>   
      <Footer/>
    </div>
  )
}

export default Single;