import React from 'react';
import './Models.css';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {giftRange} from '../assets/index';


function Models() {
  return (
    <div>
        <Header/>
        <div className='header'>
          <h1 className='header-h1'>New Cars</h1>
          <img className='header-img' src={giftRange} alt=''/>
          <p className='header-p'>Explore our range and view the latest offers</p>
        </div>
      
        
          <h1 className='new-models-heading'>NEW 2022-2023 LAND ROVER MODELS.</h1>
          
          <div className='New-models-p'>
          <p>
          At Samba Motors, we offer a wide range of new 2022-2023 Land Rover and Range Rover models in the UAE. 
          Whether you are interested in finding out the price of a new Land Rover Defender for smooth and stable drives on any terrain, 
          a Range Rover Sport for cruising the highway on family road trips or searching for an all-rounder SUV like the Range Rover Velar, 
          our online inventory includes all the latest models for sale.
          For further information, please browse the new 2022 and 2023 Land Rover and Range Rover line-up below or contact our sales team 
          today to find out more about the offers on Land Rovers in the UAE.
          </p>
          </div>
        
      
      
      <div className='cars md:grid-cols-2'>
        <Link to='The-New-Range-Rover'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/0644626e9487d06bbe5adbd80e9ea9f3/exterior2.jpg' alt='new range rover'/>
            <h3>The New Range Rover</h3>
          </div>
        </Link>
        <Link to='The-New-Range-Rover-Sport'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/14310e2d47123a7724290b05aa2797fd/rr_sport_08_copy.jpg' alt='new range rover sport'/>
            <h3>The New Range Rover Sport</h3>
          </div>
        </Link>
        <Link to='The-New-Range-Rover-Velar'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/b70494b194db628856118a1bcf7a5e64/1600_5_.jpg' alt='new range rover velar'/>
            <h3>The New Range Rover Velar</h3>
          </div>
        </Link>  
        <Link to='Range-Rover-Evoque'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/7ce18487d94bb9832adb5147f30e4e68/evoque_thumbnail_on_lr_new_cars_page.jpg' alt='range rover evoque'/>
            <h3>Range Rover Evoque</h3>
          </div>
        </Link>
        <Link to='Discovery'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/19050bde2a69ea658f05d5f5941ff157/637370593065171169ci.jpg' alt=' range rover discovery series'/>
            <h3>Discovery</h3>
          </div>
        </Link>
        <Link to='Discovery-Sports'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/724f1da80bd3e2ba1d446317a0b9ce3f/2020_land_rover_discovery_sport_prf_fd_523191_717.jpg' alt='range rover discovery sports'/>
            <h3>Discovery Sports</h3>
          </div>
        </Link> 
        <Link to='Defender'>
          <div className='model'>
            <img className='model-pix' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/8affd2e743a40ab58b9301c3e71d5270/def640.jpg' alt='range rover defender'/>
            <h3>Defender</h3>
          </div>
        </Link>          
      </div>   
        <Footer/>
    </div>
  )
}

export default Models;