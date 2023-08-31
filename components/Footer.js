import React from 'react';
import './Footer.css';
import sambawhite from '../assets/sambawhite.png'
import { paymentlogo } from '../assets';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa';
import {BsPersonFill,BsPaypal,} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-black text-[#949494] py-20 
    font-titleFont'>
        <div className='footer max-w-screen-xl mx-auto'>
            <div className='flex flex-col gap-7'>
                <img className='w-28' src={sambawhite} alt='logoLight'/>
                <p>You pay, we deliver...</p>
                <img className='w-56 relative right-3' src={paymentlogo} alt='paymentLogo'/>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div>
            <h2 className='text-2xl font-semibold text-white mb-4 '>Locate us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Opposite Al Barsha Traffic Department, Dubai</p>
                    <p>e-mail: sambamotorss6@gmail.com</p>
                </div>
            </div>

            <div className='profile'>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
               <div className='flex flex-col gap-2 text-base'>
               <Link to='/Single'>
               <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        <BsPersonFill/>
                    </span>
                    my account
                </p>
                </Link>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        <BsPaypal/>
                    </span>
                    checkout
                </p>
                <Link to='/Tracking'>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        <FaHome/>
                    </span>
                    order tracking
                </p>
                </Link>
                <Link to='/ChatApp'>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                        <MdLocationOn/>
                    </span>
                    help & support
                </p>
                </Link>
               </div>
            </div>
            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm' type='text' placeholder='e-mail'/>
                <input className='bg-transparent border px-4 py-2 text-sm' type='text' placeholder='password'/>
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900
                active:bg-white active:text-black'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer;