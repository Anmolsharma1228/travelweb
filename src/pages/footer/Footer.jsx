import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/HOTEL_KING.png'
import { Input } from '@mui/material';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiLivechat } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-[#3D0301] to-[#2E5077] text-[#F6F4F0] py-3 mt-10 w-full'>
      <div className='flex flex-col md:flex-row md:px-5 space-y-8 md:justify-around items-center py-2'>
        <div className='w-[300px] space-y-2'>
          <img src={logo} className='w-[50px] rounded-full'></img>
          <div className='flex items-center space-x-2 pt-2'>
          <MdEmail className='text-xl' />
          <p className='flex items-center'>support@kinghotel.com</p>
          </div>
          <div className='flex items-center space-x-2 pt-2'>
          <FaPhoneAlt />
          <p>Phone: +1 234 567 890</p>
          </div>
          <div className='flex items-center space-x-2 pt-2'>
          <SiLivechat className='text-xl' />
          <p>Live Chat: Available 24/7 in the bottom right corner.</p>
          </div>
        </div>
        <div className='w-[300px] font-semibold'>
          <p className='text-lg'>Quick Links</p>
          <ul>
            <li><Link to="/travelblog">Travel Blog</Link></li>
            <li><Link to="/Hotels">Hotels</Link></li>
            <li><Link to="/About">About Us</Link></li>
            </ul>
        </div>
        <div className='w-[300px] space-y-2'>
          <p className='uppercase text-lg font-semibold'>Subscribe to Newslatter</p>
          <div className='flex-col'>
            <Input className='text-[#F6F4F0] px-2 py-1 bg-slate-600 rounded-sm' placeholder='Enter Email...'/>
          </div>
          <div className='space-x-3 flex text-2xl'>
            <Link className='hover:scale-125 duration-300' to="https://www.facebook.com/" target='_blank'>
            <FaFacebookSquare />
            </Link>
            <Link className='hover:scale-125 duration-300' to="https://www.instagram.com/" target='_blank'>
            <FaInstagram />
            </Link>
            <Link className='hover:scale-125 duration-300' to="https://www.linkedin.com/" target='_blank'>
            <FaLinkedin />
            </Link>
            <Link className='hover:scale-125 duration-300' to="https://www.twitter.com/" target='_blank'>
            <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer