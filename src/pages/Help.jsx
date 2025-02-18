import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const Help = () => {

const [open, setopen] = useState(null)

const toggle = (i) =>{
  setopen(open === i ? null : i)
}

  const frequentlyasked = [
    { question: "How can I book a hotel?", answer: "You can book a hotel by selecting your destination, dates, and payment method." },
    { question: "What is your refund policy?", answer: "Refunds are processed within 5-7 business days, depending on the hotel policy." },
    { question: "Do you offer early check-in?", answer: "Early check-in is subject to availability. Please contact support for details." },
  ];



  return (
    <div className='pt-28 px-5 '>
        <h1 className='capitalize text-4xl lg:text-5xl font-bold text-red-500 text-center'>
          Our Customer Support
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10'>
        <div className='mb-10 w-[300px] shadow-lg px-4 py-3 rounded-md'>
          <h2 className='text-xl font-bold'>How to Book a Hotel?</h2>
          <ul className='text-base list-disc list-inside mt-2 space-y-2'>
            <li>Browse our hotel listings using the search bar or filters.</li>
            <li>Click on a hotel to view details, pricing, and availability.</li>
            <li>Select your check-in and check-out dates, then click "Book Now".</li>
            <li>Complete the payment process to confirm your reservation.</li>
          </ul>
        </div>
        <div className='mb-10 w-[300px] shadow-lg px-4 py-3 rounded-md'>
          <h2 className='text-xl font-bold'>Managing Your Booking</h2>
          <ul className='text-base list-disc list-inside mt-2 space-y-2'>
            <li>Log in to your account and navigate to "My Bookings".</li>
            <li>Here, you can view, modify, or cancel your reservations.</li>
            <li>Cancellation policies vary by hotel, so please check the terms before canceling.</li>
          </ul>
        </div>
        <div className='mb-10 w-[300px] shadow-lg px-4 py-3 rounded-md'>
          <h2 className='text-xl font-bold'> Payment & Refunds</h2>
          <ul className='text-base list-disc list-inside mt-2 space-y-2'>
            <li>We accept credit/debit cards, PayPal, and digital wallets.</li>
            <li>Refunds are processed within 5-7 business days if eligible.</li>
            <li>For payment issues, contact our support team.</li>
          </ul>
        </div>
        </div>
        <div className="max-w-2xl mx-auto mt-10 p-5 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-5">Frequently Asked Questions</h2>
      
      {frequentlyasked.map((faq, i) => (
        <div key={i} className="mb-3 border-b pb-3">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(i)}>
            <p className="font-medium text-lg">{faq.question}</p>
            {open === i ? <FaMinus className="text-red-500" /> : <FaPlus className="text-green-500" />}
          </div>
          {open === i && <p className="mt-2 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
            
    </div>
  );
};


export default Help;
