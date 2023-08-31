import React from 'react';
import './Banner.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = ()=> {
    const data = [
        "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1600,h_533/auto-client/c5e07e272ad246f5388d345dd5115dc2/l460_post_reveal_atm_1920x1080_en.jpg",
        "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1600,h_533/auto-client/4325de89bf0a6b1749dbb4b1bc035029/lr_range_atm_website_en_1170x390_cta.png",
        "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1600,h_533/auto-client/1b29859b9e1a0fe431054a6ed35b8064/l461_post_reveal_atm_1920x1080_en.jpg",
        "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1600,h_533/auto-client/1428e4d0484eb072382295c8dc4c1007/2023_05_31_altayer_landrover_defender_banner_english_desktop.jpg",
    ];

  return (
    <section classname='grid gap-8'>
    <div className=' w-full h-auto overflow-x-hidden'>
         <Carousel useKeyboardArrows={true} className='w-screen relative'>
        {data.map((URL, index) => (
          <div className="slide">
            <img className='w-screen h-full object-cover' alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
      <div className='Discounts'>
         <span className='Discount-span' >Get 20% off* your first order.</span>
      </div> 
      
    </div>
    </section>
  )
}

export default Banner;