import React from 'react';
import './Defender.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Defender() {
  return (
    <div>
       <Header/>
      <div className='header'>
          <h1 className='header-h1'>New Land Rover Defender</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/d8db346a61b6e5559f7a6b29a20a4b17/636998351332793165ee.jpg' alt='new land rover defender'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>
                Defender’s exterior is without match. Its distinctive silhouette instantly<br/> 
                demonstrates the vehicle's character.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_474,y_243,w_657,h_657/w_759,h_759,c_fill/auto-client/5e8a419f4ac1a5a73d223b5eb8f3ec6b/637002682859808270yn.jpg' alt='defender exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>
                An interior with purpose. Defender’s cabin can be customised to suit<br/> 
                your demands.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_286,y_211,w_634,h_634/w_759,h_759,c_fill/auto-client/e2c38872e0c56cf55f18467cf551a77e/636998409026752905hg.jpg' alt='defender interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className='performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1012,h_675,q_auto,c_fill,f_auto,fl_lossy/auto-client/66fc43fd9aba7ada1cc0c78e4690a4f9/637000928161153751up.jpg' alt='exterior'/>
        </div>
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/de605be8414d43e2580321ca961b89a8/636993807844673734kg.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
            Inspired by your smartphone. Our new infotainment system, Pivi Pro, delivers full connectivity and key<br/> 
            information at a glance.
          </p>
          </div>
          <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Capabilities</h3>
              <p className='header-paragraph'>               
                Uncover new territories. Tackle extreme conditions. Defender’s<br/> 
                extraordinary all-terrain capabilities and permanent All Wheel Drive<br/> 
                make it unstoppable. Both off and on-road.​ 
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/250cd61272bb6cccda3b4201cb75bf67/637000928325468533xt.jpg' alt='capabilities'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Safety and Security</h3>
              <p className='header-paragraph'>               
                Exceptional approach, breakover and departure angles. Shortened front<br/> 
                and rear overhangs. Defender’s geometry makes it supremely capable
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_206,y_0,w_900,h_900/w_759,h_759,c_fill/auto-client/ed5b1e3d2ba36865928aabb73a93b98e/defender_safety.jpg' alt='wheels'/>
          </div>
      </div>
      <div className='header' style={{marginTop:'4px'}}>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_1012,q_auto,c_fill,f_auto,fl_lossy/auto-client/6fcc2d0f5c4aba7383c73d13ff7b3b00/637009448454913796jx.jpg' alt='defender'/>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Defender;