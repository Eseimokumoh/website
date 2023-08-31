import React from 'react';
import './RangeRoverEvoque.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RangeRoverEvoque() {
  return (
    <div>
      <Header/>
      <div className='header'>
          <h1 className='header-h1'>Range Rover Evoque</h1>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1517,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/dfe3f345e813a3cdb9a7f836a5e6124f/636759929927645265ac.jpg' alt='range rover evoque'/>
      </div>
      <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Exterior</h3>
              <p className='header-paragraph'>
                Outstanding proportions deliver a dramatic silhouette and stance,<br/> 
                enhancing Range Rover Evoque’s distinctive appearance.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/f247d85b49fed0c9167c2309effd3ccc/636764993159518219ps.jpg' alt='range rover evoque exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Interior</h3>
              <p className='header-paragraph'>
                Personalise the cabin with your favourite textures and colour<br/> 
                combinations in twin-needle stitched leather, aluminium or wood veneer<br/> 
                finishers, and choose the panoramic roof to flood the cabin with natural light.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_0,w_3852,h_3852/w_759,h_759,c_fill/auto-client/9d0fd2bc8ab14676d0492a7c7fe40316/range_rover_evoque_interior_2.jpg' alt='range rover evoque interior'/>
          </div>
      </div>
      <div className='performance'>
        <div className='performance-first'>
          <img className='performance-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1012,h_675,q_auto,c_fill,f_auto,fl_lossy/auto-client/51b770d34c2c1f6ccd5f0d3842c4f870/636770077650117918by_1_.jpg' alt='the capability'/>
        </div>
      </div>
      <div className='technology'>
          <img src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_1517,h_690,q_auto,c_fill,f_auto,fl_lossy/auto-client/d3e0cfa9bf1b9760133b7554633418e2/range_rover_evoque_technology.jpg' alt='technology'/>
          <div className='tech-div'>
          <h3 className='tech-h'>Technology</h3>
          <p className='tech-p'>
          The new Range Rover Evoque is the first in the world to<br/> feature Ground View technology, 
          which effectively makes the bonnet invisible by projecting<br/> camera imagery onto the upper 
          touchscreen to show the driver a 180-degree<br/> view under the front of the vehicle.
          </p>
          </div>
          <div className='ext-int'>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Capabilities</h3>
              <p className='header-paragraph'>
                All Wheel Drive ensures a confident drive, on or off-road.<br/> 
                On slippery surfaces, such as grass and snow, torque can be balanced<br/> 
                between the front and rear wheels to maximise traction.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_597,y_0,w_900,h_900/w_759,h_759,c_fill/auto-client/77d78aabf8eeb5d9db3fa82c25441b86/636731237379130146qp.jpg' alt='range rover evoque exterior'/>
          </div>
          <div>
            <div className='ext-int-header'>
              <h3 className='header-h'>Safety and Security</h3>
              <p className='header-paragraph'>
                A first for Land Rover and among the many innovative features that make<br/> 
                Range Rover Evoque a pleasure to drive.
              </p>
            </div>
            <img className='ext-int-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/w_759,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/2bed9733610fc36099be456b2ac5eba1/636767712642955096xp.jpg' alt='range rover evoque interior'/>
          </div>
      </div>
      <div className='header' style={{marginTop:'4px'}}>
          <img className='header-img' src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_1063,y_992,w_3366,h_2241/w_1518,h_1012,c_fill/auto-client/28f4464158e828b61cee613d9cb59725/range_rover_evoque_design.jpg' alt='range rover evoque'/>
      </div>
      <Footer/>
      </div>   
    </div>
  )
}
export default RangeRoverEvoque;