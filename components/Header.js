import React, {useState} from 'react';
import {Cart, S} from '../assets/index';
import {Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

function Header() {
  const [nav, setNav] = useState(false);

 const handleNav = () => {
  setNav(!nav)
}

  return (
    //check the inner div and move it left or right to remove the nav ontop the logo
    <div className='shadow-md w-full sticky top-0 z-50'>
        <div className='bg-white py-4 md:px-10 md:flex items-center justify-between'>
          <div>
            <img src={S} className='w-28' alt='logo'/>
          </div>
          <div onClick={handleNav} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </div>
        <div >
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white
          md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
          ${nav ? "block opacity-100" : "hidden md:opacity-100 opacity-0"}`}>
          <Link to='/' >
            <li className='text-base text-black font-bold hover:text-green-700
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer 
            duration-300 md:ml-8 md:my-0 my-7'>
            Home
            </li>
            </Link>
            <Link to='/Models' >
            <li className='text-base text-black font-bold hover:text-green-700
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer 
            duration-300 md:ml-8 md:my-0 my-7'>
            Models
            </li>
            </Link>
            <Link to='/Buy-Online'>
            <li className='text-base text-black font-bold hover:text-green-700
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer
            duration-300 md:ml-8 md:my-0 my-7'>
            Buy Online
            </li>
            </Link>
            <Link to='/Signup'>
            <li className='text-base text-black font-bold hover:text-green-700
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer
            duration-300 md:ml-8 md:my-0 my-7'>
            Register
            </li>
            </Link> 
            <Link to='/ChatApp'>
            <li className='text-base text-black font-bold hover:text-green-700
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer
            duration-300 md:ml-8 md:my-0 my-7'>
            Chat with us
            </li>
            </Link>
            <Link to='/Tracking'>
            <li className='text-base text-black font-bold hover:text-green-700
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer
            duration-300 md:ml-8 md:my-0 my-7'>
            Order Tracking
            </li>
            </Link>  

            <div className='relative md:ml-8 md:my-0 my-7'>
          <img className='w-6 cursor-pointer' src={Cart} alt='CartImg'/>
          <span className='absolute w-6 top-4 left-4 text-sm flex items-center 
          justify-center font-semibold'>
          3
          </span>
          </div>
          <Link to='/Single'>
          <button className='dashboard md:ml-8 md:my-0 my-7'style={{backgroundColor:'green',color:'white',borderRadius:'5px',padding:'4px'}}>Dashboard</button>
          </Link>      
          </ul>       
        </div>        
        </div>
    </div>
  )
}

export default Header;