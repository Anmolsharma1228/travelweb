import React from 'react'
import Carousels from '../carousel/Carousel'
import Banner from '../Banner/Banner'

const About = () => {
  return (
    <React.Fragment>
      <Carousels/>
     <Banner/>
     <div className='container mx-auto'>
      <div className='py-10'>
        <h2 className='bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-[#2E5077] text-centet font-bold text-4xl text-center'>Our Team</h2>
        <div className='text-center flex flex-wrap items-center justify-center md:justify-around py-5  space-y-8 lg:space-y-0'>
          <div className='shadow-lg w-[280px] font-semibold hover:scale-105 duration-500'>
            <img className='rounded-md' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwdGVhbSUyMG1lbWJlcnN8ZW58MHx8MHx8fDA%3D" alt=""/>
            <p className='py-2'>Graphic Designers</p>
          </div>
          <div className='shadow-lg w-[280px] font-semibold hover:scale-105 duration-500'>
            <img className='rounded-md' src="https://cdn.pixabay.com/photo/2020/12/18/19/27/team-5842784_640.jpg" alt=""/>
            <p className='py-2'>Software Engineers</p>
          </div>
          <div className='shadow-lg w-[280px] font-semibold hover:scale-105 duration-500'>
            <img className='rounded-md' src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_640.jpg" alt=""/>
            <p className='py-2'>Project Manager</p>
          </div>
          <div className='shadow-lg w-[280px] font-semibold hover:scale-105 duration-500'>
            <img className='rounded-md' src="https://media.istockphoto.com/id/2052635887/photo/portrait-of-indian-young-woman-wearing-casual-clothing-isolated-on-white-background-stock.jpg?s=1024x1024&w=is&k=20&c=cGGea8bBUFTqvduujQ94S_WJNYKqxysGRGlkeeeIFKA=" alt=""/>
            <p className='py-2'>Sales Manager</p>
          </div>
        </div>
      </div>
     </div>
    </React.Fragment>
  )
}

export default About