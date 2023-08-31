import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className='py-10'>
        <div className='head flex flex-col items-center gap-4'>
            <h1 className='heading text-2xl bg-black text-white 
            py-2 px-2 w-150 text-center'>
            SPECIALISED LAND ROVER DEALERSHIP IN THE UAE
            </h1>
            
            <span className='w-20 h-[3px] bg-black'></span>
            </div>
            <div className='head flex flex-col items-center gap-4'>
            <p className='paragraph max-w-[1200px] text-gray-600 '>
            Get ready to start your next adventure with Land Rover. 
            No matter where you are going, the iconic Land Rover vehicles 
            combine extraordinary all-terrain performance capabilities with state-of-the-art technology. 
            Samba Motors is the official dealer of Land Rover vehicles in the UAE. 
            Browse the latest Land Rovers for sale in the UAE online, or visit our showrooms in person.
            <br/>
            Whether you are interested in the slick Range Rover Sport, 
            the classic Land Rover Defender and stylish Range Rover Evoque, 
            you’ll be spoiled for choice at our showroom in the UAE. 
            Not sure which vehicle is the right fit for you, your lifestyle, family or budget? 
            Enquire online or Chat here, our specialist sales team will be only too happy to help guide you in your decision. 
            </p>
        </div>
    </div>
  );
};

export default Products;