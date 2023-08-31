import React from 'react';
import './BuyOnline.css';
import Header from './Header';
import Footer from './Footer';

function BuyOnline({cars}) {

  return (
    <div>
        <Header/>
        
          <h1 className='New-models-h'>BUY YOUR LAND ROVER CAR ONLINE WITH US</h1>
          <p className='New-models-p'>
            Samba Motors offers the very best selection of New and Approved pre-owned Land Rover cars for sale in the UAE. 
            Whether you are in the market to buy the extraordinarily capable Land Rover Defender, the ultimate 
            sophisticated Range Rover, the dynamic Range Rover Sport, or the ever-popular Range Rover Velar, browse our 
            inventory of new and pre-owned Land Rovers and take your pick.
          </p>
          <p className='second-p'>
            *The images displayed below may not be of the actual vehicle<br/>
            *All prices are inclusive of VAT
          </p>
      

        <div className='vehicles'>
        <h3>41 Vehicles Available</h3>
        </div>
        
            <div className='cars'>
            {cars.map((car)=>(
             <div className='model' id={car.id}>
                <img className='model-pix' src={car.image} alt=''/>
                <h3>{car.name}</h3>
                <span>model: {car.model}</span>
                <span>price: {car.price}</span><hr />
                <span>colour: {car.colour}</span>
                <span>mileage: {car.mileage}</span>
                <span>fuel type: {car.fuelType}</span>
                <span>transmission: {car.transmission}</span>
             </div>  
            ))}                 
            </div>     
        <Footer/>
    </div>
  )
}

export default BuyOnline;