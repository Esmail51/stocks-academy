import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import VideoPlayer from './videoPlayer';





const HeroSection: React.FC = () => {

  return (

<div className="flex flex-col   md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 ">
  {/* Left Section */}
  <div className="flex-grow max-w-lg text-center md:text-left order-last md:order-none">
    <h1 className="lg:text-[76px] md:text-5xl text-4xl font-medium leading-tight mb-6">
      Strictly Stocks <br />Academy
    </h1>
    <p className="text-gray-800 text-2xl font-medium mb-3">Preparation meets Profits</p>
    <p className="text-gray-600 mb-6">
      Strictly Stocks is an online trading community where traders come together to learn technical analysis tools to become more educated, efficient, and profitable traders.
    </p>

    
    
    <div className="flex justify-center md:justify-start space-x-4">
      <Link to={'courses'}>
      <button className="bg-googleBlue-500 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
        Get Started
      </button>
      
      </Link>
      
    </div>
    
    
  </div>

  {/* Right Section */}
  <motion.div
    className="md:flex flex-col md:flex-row items-stretch w-full md:w-[50%] h-[500px] space-x-4 md-1 lg:mt-12 md:mt-0"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeInOut" }} 
  >
    {/* Left Image with Stats */}
    {/* <div className="flex flex-col w-full"> */}
      {/* Image */}
      {/* <div className="relative flex-grow h-full">
        <img
          src="https://templates.sparklethings.com/virtura/wp-content/uploads/sites/31/2024/12/image-ZWV2MLM.jpg"
          alt="Students"
          className="rounded-lg object-cover h-full w-full"
        />
      </div> */}
      {/* Stats */}
      {/* <div className="flex justify-around border border-purple-500 py-4 mt-4 rounded-lg bg-white">
        <div className="text-center">
          <h3 className="text-3xl font-medium">000+</h3>
          <p className="text-gray-600">Students</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-medium">000+</h3>
          <p className="text-gray-600">Courses</p>
        </div>
      </div> */}
    {/* </div> */}

    {/* Right Image */}
    <div className="relative w-full ">
      {/* <img
        src="https://templates.sparklethings.com/virtura/wp-content/uploads/sites/31/2024/12/image-HY6B4QB.jpg"
        alt="Student using tablet"
        className="rounded-lg object-cover h-full w-full"
      /> */}
      <VideoPlayer/>
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-6.586-3.795A1 1 0 007 8.264v7.471a1 1 0 001.166.986l6.586-3.796a1 1 0 000-1.737z"
            />
          </svg>
        </div>
      </div> */}
    </div>
  </motion.div>
</div>




  );
};

export default HeroSection;
