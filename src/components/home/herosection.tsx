import React from 'react';
import backGroundVideo from '../../assets/vedios/file.mp4';
import img1 from '../../assets/images/Untitled-design-7.png.webp'





const HeroSection: React.FC = () => {

  return (

    <section className="bg-gradient-to-r bg-white py-12  md:px-16 lg:px-24 relative">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-75"></div> */}

      <div className=" flex flex-col lg:flex-row items-center justify-center lg:px-0 px-5 pt-10 mt-10 z-10 relative lg:gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Strictly Stocks Academy
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Preparation meets Profits
          </p>
          <p className="text-base md:text-xl mb-6 text-gray-400">
            Strictly Stocks is an online trading community where traders come together to learn technical analysis tools to become more educated, efficient, and profitable traders.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <button className="bg-blue-700 hover:bg-purple-100 hover:text-black text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2">
              Get started →
            </button>
          </div>
          <div className="flex gap-6">
            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold">00+</h3>
              <p className="text-sm">Tutors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">0000+</h3>
              <p className="text-sm">Students</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">000+</h3>
              <p className="text-sm">Courses</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="bg-gray-200 rounded-lg flex items-center justify-center w-full h-72 lg:w-full lg:h-[500px]">
            <img src={img1} alt="Location" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
