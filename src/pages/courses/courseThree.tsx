import React from 'react'
import Header from '../../components/header'
import img1 from '../../assets/images/Quality Classroom Picture .avif';
import ScrollToTop from '../../components/scrollTop';



export default function CourseThree() {
  return (
    <div className='' >
      <Header></Header>
      <ScrollToTop />

      <section className='mt-20  container py-12 px-4 md:px-16 lg:px-24'>
        <div>

          <div>
            <h1 className='text-4xl font-bold text-blue-600 mb-4 text-start'>An Introduction to Options Trading</h1>
            <p className='text-lg text-gray-700 mb-8 text-start'>
            A comprehensive 5 hour class in Toronto covering introductory concepts of Options Trading and application of Options Trading to diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management &  Options Trading Techniques.

            </p>

          </div>
          <div className='flex flex-col lg:flex-row lg:gap-20 gap-5'>
            <div className='lg:w-1/2 w-full'>
              <img src={img1} alt='Classroom' className='w-full rounded-lg object-cover h-full' />

            </div>
            <div className='lg:w-1/2 w-full text-start'>
              <div>
                <div>
                  <p>A comprehensive 5 hour class in Toronto covering introductory concepts of Options Trading and application of Options Trading to diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management &  Options Trading Techniques. </p>
                </div>
              </div>
              <div className='my-2'>
                <p>An Introduction to understanding of Options Trading, a look at Options Chain, an Understanding of conceptions including theta, beta, options volume, expiry, decay, and prioritizing the emphasis of risk management. . </p>
              </div>
              
              <div className=''>
                <h2 className='text-xl font-semibold text-start text-gray-900   my-4'>Booking Details</h2>
                <div className=' text-start  text-gray-700'>
                  <div>
                    <p className='font-semibold'>Price: $399.00 + Tax </p>
                    <p className='font-semibold'>
                    Pre-requisites: A working knowledge of Stock Market Trading and 5 + years of exposure to  
                          stock market investing & Trading. 

                    </p>

                  </div>
                  <button className="inline-block bg-blue-600 text-white font-semibold text-sm px-3 py-2 mt-2 rounded-lg shadow-lg  hover:bg-purple-100 transition hover:text-black">Course Enrollment</button>
                </div>


              </div>
            </div>
          </div>


        </div>


        {/* Price: $399.00 + Tax 


Boardroom Location Details: 

Course Dates & Enrollment Details:     [ Course Enrollment Button ]  */}

      </section>

    </div>
  )
}
