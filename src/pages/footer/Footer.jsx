import React from 'react';
import { Link } from 'react-router-dom';
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
    <footer className="bg-gradient-to-r from-[#3D0301] to-[#2E5077] text-[#F6F4F0] py-6 mt-10 w-full">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3 text-center md:text-left">
        
        
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MdEmail className="text-xl" />
            <p>support@kinghotel.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaPhoneAlt />
            <p>+1 234 567 890</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <SiLivechat className="text-xl" />
            <p>Live Chat: 24/7 available</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold">Quick Links</p>
          <ul className="space-y-2">
            <li><Link to="/travelblog" className="hover:underline">Travel Blog</Link></li>
            <li><Link to="/Hotels" className="hover:underline">Hotels</Link></li>
            <li><Link to="/About" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold uppercase">Subscribe to Newsletter</p>
          <div className="flex justify-center md:justify-start">
            <Input 
              className="text-[#F6F4F0] px-2 py-1 bg-slate-600 rounded-sm w-full md:w-auto"
              placeholder="Enter Email..."
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <Link to="https://www.facebook.com/" target="_blank" className="hover:scale-110 duration-300">
              <FaFacebookSquare />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="hover:scale-110 duration-300">
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank" className="hover:scale-110 duration-300">
              <FaLinkedin />
            </Link>
            <Link to="https://www.twitter.com/" target="_blank" className="hover:scale-110 duration-300">
              <FaXTwitter />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
