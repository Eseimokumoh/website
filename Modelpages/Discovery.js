import React from 'react';
import './Discovery.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Discovery() {
  return (
    <div>
       <Header/>
      <div className='header'>
          <h1 className='header-h1'>Land Rover Discovery</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/eb4f899641ee453dba1d2e77eeb2cff0/main_image_1_.jpg' alt='Land rover discovery'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>
                Design updates give Discovery a lower, wider stance. 
                From the new<br/> headlights and rear lights, to the refined front grille and new bumpers.<br/> 
                The enhanced visual harmony of the rear end and new 20-22” wheel<br/> designs elevate the vehicle’s 
                contemporary appeal.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_782,y_0,w_6076,h_6076/w_759,h_759,c_fill/auto-client/f512fe2fd5ea6327daa2739dfd661fe9/exterior.jpg' alt='Land rover discovery exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>
                An unmistakable and purposeful design. A host of subtle and<br/> 
                sophisticated refinements make the highly versatile Land Rover<br/> 
                Discovery even more premium.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/43e7fe1af9fe8b258c0b433feb6ed1f2/interior.jpg' alt='Land rover discovery interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className='performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1012,h_675,q_auto,c_fill,f_auto,fl_lossy/auto-client/d078e18edbfbde6e7aa76adbc5cbca7c/zoom_inn.jpg' alt='interior'/>
        </div>
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_81,w_3810,h_1728/w_1518,h_690,c_fill/auto-client/8ffcbf1026a59fd64fca57681e5c0706/technology._1_7774343434.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
            Always ready and always on, Pivi Pro is our most intuitive infotainment system yet. Standard features<br/>
            include: - 11.4” Touchscreen - Newly designed interface - Digital Audio Broadcast (DAB) radio - Apple<br/> 
            CarPlay - Android Auto - Remote
          </p>
          </div>
          <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Capabilities</h3>
              <p className='header-paragraph'>
                Ensures a confident drive, on or off road. On slippery surfaces, such as<br/> 
                grass and snow, All Wheel Drive (AWD) and Terrain Response work<br/> 
                together to automatically balance torque between the front and rear<br/> 
                wheels, maximising traction.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/55eb37a87aa1096cf23fe5673350b98a/capabilities.jpg' alt='capabilities'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Safety and Security</h3>
              <p className='header-paragraph'>
                Land Rover Discovery has a five-star Euro NCAP safety rating. A<br/>
                combination of up to five ISOFIX points, a range of driver assistance<br/> 
                features which make driving and parking easier and up to eight driver<br/> 
                and passenger airbags help keep your family safe.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/2bf50d389ea8559c1db92870b4554ae8/safety_security.jpg' alt='technology'/>
          </div>
      </div>
      <div className='header' style={{marginTop:'4px'}}>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/fe29df1b2382efbfdd438365213620e3/find_your_location.jpg' alt='Land rover discovery'/>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Discovery;