import React from 'react';
import './NewRangeRoverSport.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NewRangeRoverSport() {
  return (
    <div>
      <Header/>
      <div className='header'>
          <h1 className='header-h1'>The New Range Rover Sport</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1516,h_689,q_auto,c_fill,f_auto,fl_lossy/auto-client/b81a59bad80b366a74440263d32f411c/rr_sport_09.jpg' alt='new range rover sport'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>An assertive evolution where modernity and refinement 
                meet visceral <br/> desire. 
                Range Rover Sport redefines sporting luxury.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_758,h_758,q_auto,c_fill,f_auto,fl_lossy/auto-client/0f76e1a219199a87bbe60c8cdb74ec22/2022_05_19_al_tayer_landrover_newrangerangeroversport.jpg' alt='new range rover sport exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>
              Modernist, sophisticated and dynamic. 
              The purposeful cockpit-like <br/> driving position sets the tone for a focused interior.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_758,h_758,q_auto,c_fill,f_auto,fl_lossy/auto-client/df75cb2f03ec5b4f2af556c9f0b1a34d/rr_sport_1_3_.jpg' alt='new range rover sport interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className='performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1011,h_674,q_auto,c_fill,f_auto,fl_lossy/auto-client/35f2c3e573ebf3f35de0c76618325828/rr_sport_1_9_.jpg' alt='the capability'/>
        </div>
        
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1516,h_689,q_auto,c_fill,f_auto,fl_lossy/auto-client/fa24f787e2f98664bc20aa8af32f056e/rr_sport_1.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
          True modern luxury with the latest technologies for comfort and convenience.
          </p>
          
          </div>
          <div className='gallery'>
        <div className='gallery-img'>
          <img  src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/600a58ecec09a5fa186083e7ad2e96c7/rr_sport_06.jpg' alt='front view'/>
        </div>
        <div className='gallery-img'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/d452e1c5c834c47f501a102236303a04/rr_sport_17.jpg' alt='interior'/>
        </div>
        <div className='gallery-img'>
          <img  src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/1786d1d56d6669d602e4542b5a6dc579/rr_sport_1_11_.jpg' alt='interior'/>
        </div>
        <div className='gallery-img'>
          <img  src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/4c9e48a9b80023b67ee587e705a8fb4f/rr_sport_10.jpg' alt='back view'/>
        </div>
      </div>
      <div className='footer-div'>
      <Footer/>
      </div>
      </div>
    </div>
  )
}

export default NewRangeRoverSport;