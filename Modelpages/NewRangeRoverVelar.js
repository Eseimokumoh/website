import React from 'react';
import './NewRangeRoverVelar.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NewRangeRoverVelar() {
  return (
    <div>
       <Header/>
      <div className='header'>
          <h1 className='header-h1'>The New Range Rover Velar</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_100,w_1600,h_726/w_1516,h_689,c_fill/auto-client/b70494b194db628856118a1bcf7a5e64/1600_5_.jpg' alt='new range rover velar'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>
                Precision details. Range Rover Velar features curated and refined<br/> elements, 
                including a new grille design in a variety of technical finishes,<br/> to optimise 
                vehicle proportions. Simplifying the exterior design and<br/> optimising aerodynamic efficiency, 
                the flush door handles remain hidden<br/> until deployed.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_758,h_758,q_auto,c_fill,f_auto,fl_lossy/auto-client/2418baf9c2c03eee5c78518215eaa5ef/1600_1_1_.jpg' alt='new range rover exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>
              The clean sophistication of the new centre console conceals generous<br/> 
              stowage and the convenience of wireless charging. Range Rover Velar<br/> 
              revel in the natural beauty of tactile wood grain. Our collection of luxury<br/> 
              veneers is the result of exemplary craftsmanship.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_116,y_0,w_900,h_900/w_758,h_758,c_fill/auto-client/97a0f637cf03f16cbc6aa31e82893381/1600_2_1.jpg' alt='new range rover interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className='performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1011,h_674,q_auto,c_fill,f_auto,fl_lossy/auto-client/ae490e645b2748c41c1e0ca7420291e1/suspension.jpg' alt='exterior'/>
        </div>
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1517,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/62a751caa10788653a077242d85d4c10/dash.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
            Pioneering Innovation. Powered by hybrid technology, enhanced with the latest wellbeing 
            features and<br/> fully connected infotainment. Range Rover Velar embodies our vision for 
            the future with an<br/> uncompromising approach to innovation. Our award-winning Pivi Pro 
            infotainment system incorporates<br/>all controls on a neww 11,4" curved glass central Touchscreen. 
            Creating a clean, elegant fascia<br/> with intuitive volume, climae and seat-adjustment functionality.
          </p>
          </div>
          <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Capabilities</h3>
              <p className='header-paragraph'>
                Adaptive Dynamics delivers a smooth ride and optimum control by<br/>
                 monitoring body and steering movements up to 500 times a second.<br/> 
                Select specific chassis and powertrain settings to suit your driving style<br/> 
                with Configurable Dynamics 
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_282,y_0,w_901,h_901/w_759,h_759,c_fill/auto-client/1418bbd54a9f27306b46e58a05dcfcfc/capability.jpg' alt='capabilities'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Safety and Security</h3>
              <p className='header-paragraph'>
                Adaptable Technologies. Your on-road driving experience is enhanced by<br/> 
                a Dynamic program within the Terrain Response 2 system, while All Terrain Progress<br/> 
                Control provides effortless off-road driving as it maintains a constant speed for you.<br/> 
                Towing couldn’t be easier with Advanced Tow Assist technology taking the stress out of<br/> 
                reversing manoeuvres.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_393,y_0,w_899,h_899/w_759,h_759,c_fill/auto-client/589eb0e5f5d6de0cc623b414a2e11345/1600_7_.jpg' alt='technology'/>
          </div>
      </div>
      <div className='header' style={{marginTop:'4px'}}>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1518,h_1012,q_auto,c_fill,f_auto,fl_lossy/auto-client/6a9fb118cef33de9e63ada23276ce526/mild_hybrid.jpg' alt='new range rover velar'/>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default NewRangeRoverVelar;