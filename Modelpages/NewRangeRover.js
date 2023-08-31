import React from 'react';
import './NewRangeRover.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NewRangeRover() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='header'>
          <h1 className='header-h1'>The New Range Rover</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1520,h_691,q_auto,c_fill,f_auto,fl_lossy/auto-client/6d2a3095260a05544bba7bdc7166a320/l460_22my_054_glhd_dx_gallery_1600x900.jpg' alt='new range rover'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>Distinguished exterior design, the reductive nature of the design is <br/> free from superfluous detail, 
              resulting in a form which has breath-taking <br/> modernity. 
              This is the most desirable range rover ever created.</p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_200,y_0,w_900,h_900/w_760,h_760,c_fill/auto-client/905f53281bcca75bad1bc78b1cf9461d/l460_22my_174_glhd_gallery_1600x900.jpg' alt='new range rover exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>Sophisticated interior design, 
              the finest materials are used to create a <br/> sanctuary of superior travel for all.</p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_760,h_760,q_auto,c_fill,f_auto,fl_lossy/auto-client/6c492314c8a2f7b066a4ecbd44104a5d/l460_22my_121_glhd_alt_gallery_1600x900.jpg' alt='new range rover interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className=' performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1013,h_675,q_auto,c_fill,f_auto,fl_lossy/auto-client/e039daa423e06edd80672796f93665e6/l460_22my_022_glhd_gallery_1600x900.jpg' alt='the interior'/>
        </div>
       
      
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1512,h_687,q_auto,c_fill,f_auto,fl_lossy/auto-client/afd4e0f9b644a04e3a3c81978ff60589/l460_22my_126_glhd_gallery_1600x900.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
            Range Rover’s technology is designed to make your life easier, 
            from a host of driving features to our <br/> award-winning** 
            infotainment system, Pivi Pro.
          </p>
          </div>
          <div className='gallery'>
        <div className='gallery-img'>
          <img  src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/a64a1b368b9dd26724581bb468e53caa/exterior3.jpg' alt='front view'/>
        </div>
        <div className='gallery-img'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fit,f_auto,fl_lossy/auto-client/9eac69746eee363537363e878b8e26cd/exterior1.jpg' alt='side view'/>
        </div>
        <div className='gallery-img'>
          <img  src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/2275780e6274c98594ad9d06f768a527/exterior1_1_.jpg' alt='interior'/>
        </div>
        <div className='gallery-img'>
          <img  src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_425,h_283,q_auto,c_fill,f_auto,fl_lossy/auto-client/0644626e9487d06bbe5adbd80e9ea9f3/exterior2.jpg' alt='side view'/>
        </div>
      </div>
    
      <Footer/>

      </div>
  </div>
  )
}

export default NewRangeRover;