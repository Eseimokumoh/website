import React from 'react';
import './DiscoverySports.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function DiscoverySports() {
  return (
    <div>
       <Header/>
      <div className='header'>
          <h1 className='header-h1'>Land Rover Discovery Sports</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/d1771d3f1960f0f300b41d07de1f87eb/636892997380223685rv.jpg' alt='Land rover discovery sports'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>
                Discovery Sport’s refreshed exterior maintains the iconic, award-winning<br/> 
                design and facilitates the addition of new technologies
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/4d2da605b195f06f5a48ece6aff74bed/discovery_sport_exterior.jpg' alt='discovery sports exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>
                Personalise your interior with a choice of premium finishes and<br/> 
                contemporary materials.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_780,y_80,w_820,h_820/w_759,h_759,c_fill/auto-client/e3afc3f00dc1d5e0039e322434b746f0/discovery_sport_interios.jpg' alt='discovery sports interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className='performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1012,h_675,q_auto,c_fill,f_auto,fl_lossy/auto-client/f9f0e50e22f664b0f26a3343c30872a5/636886142347279715xm.jpg' alt='exterior'/>
        </div>
      
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/b899e0b3714519ae7da31b369dbef456/636886142461276144oi.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
            Stay connected wherever you are. With the Online Pack you can ensure passengers are constantly<br/> 
            entertained, while you can stay informed with the Smartphone Pack, seamlessly integrating connected<br/> 
            devices with your Discovery Sport.​
          </p>
          </div>
          <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Capabilities</h3>
              <p className='header-paragraph'>
                All Wheel Drive ensures a confident drive, on or off-road. On slippery<br/> 
                surfaces, such as grass and snow, torque can be balanced between the<br/> 
                front and rear wheels to maximise traction.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/43b8d236c99534c89d5b9ace7bc9f699/discovery_sport_capabilities.jpg' alt='capabilities'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Safety and Security</h3>
              <p className='header-paragraph'>
                ​ALL WHEEL DRIVE, Ensures a confident drive, on or off-road. On slippery<br/> 
                surfaces, such as grass and snow, torque can be balanced between the<br/> 
                front and rear wheels to maximise traction.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/7465a22fbe9cf309b7dc4f8ead44d7fa/discovery_sport_safety.jpg' alt='technology'/>
          </div>
      </div>
      <div className='header' style={{marginTop:'4px'}}>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_1012,q_auto,c_fill,f_auto,fl_lossy/auto-client/84fc109344ed35716e31ff13fea5407c/636886142393128445cw.jpg' alt='discovery sports'/>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default DiscoverySports;