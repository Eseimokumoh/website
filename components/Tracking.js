import React, {useState, useEffect} from 'react';
import './Tracking.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Header from './Header';
import Footer from './Footer';
import {db} from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function Tracking() {
    const [numbers, setNumbers] = useState([]);


      useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "numbers"), 
      (snapShot) => {
        let numbers = [];
        snapShot.docs.forEach((doc)=>{
          numbers.push({id : doc.id, ...doc.data()});
      });
      setNumbers(numbers);
      console.log(numbers);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
      setNumbers(numbers);
    };
  }, []);


  return (
    <div>
    <Header/>
    <h1 className='order'>Order Tracking</h1>
    <div className='country'>
        <h3><img style={{height:'100px', width:'100px'}} src='https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f1e6-1f1ea.jpg' alt='UAE flag'/> UNITED ARAB EMIRATES</h3>
        <h3><img style={{height:'100px', width:'100px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEq9xTMEBqXzODy7gbj1lF8g8ryazI2lKcNg&usqp=CAU' alt='Canada flag'/>CANADA</h3>
    </div>
    {numbers.map((number)=>(
    <div classname='length'>
      <ProgressBar
        percent={number.percentage}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
       <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="70"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
              alt='pokemon'
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="70"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
              alt='pokemon'
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="70"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
              alt='pokemon'
            />
          )}
        </Step>
      </ProgressBar>
      </div>
      ))}
      <Footer/>
    </div>
  )
}

export default Tracking;