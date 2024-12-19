import React from 'react'
import Header from '../../components/header'
import img1 from '../../assets/images/Quality Classroom Picture 2 .avif';

export default function CourseTwo() {
  return (
    <div className='bg-purple-100' >
    <Header></Header>

    <section className=' container py-12 px-4 md:px-16 lg:px-24'>
      <div>

        <div>
          <h1 className='text-4xl font-bold text-gray-900 mb-5 text-start'>In-Depth Technical Analysis Training</h1>
        </div>
        <div className='flex gap-20'>
          <div className='w-1/2 '>
            <img src={img1} alt='Classroom' className='w-full rounded-lg object-cover h-full' />

          </div>
          <div className='w-1/2 text-start'>
            <div>
              <div>
                <p>A Sequel to the Intro seminar series, where students dive into a comprehensive 4 hour seminar course in Toronto covering an in-depth understanding of  technical analysis tools; application of a multitude of technical analysis indicators, along with effective risk management strategies to optimize profitable investing and trading systems. 
                </p>
              </div>
            </div>
            
            <div>
              <p className='pt-2'>Students will learn an interactive style boardroom limited to 6 persons, where students will gain hands-on knowledge of diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management & swing trading and position management techniques.
              </p>
            </div>
            <div className=''>
              <h2 className='text-xl font-semibold text-start text-gray-900   my-4'>Booking Details</h2>
              <div className=' text-start  text-gray-700'>
                <div>
                  <p className='font-semibold'>Price: $249.00 + Tax </p>
                  <p className='font-semibold'>Pre-requisites:  Complete of Intro Course. </p>
                </div>
                <button className="inline-block bg-purple-500 text-white font-semibold text-sm px-3 py-2 mt-2 rounded-lg shadow-lg  hover:bg-gray-100 hover:text-black">Course Enrollment</button>
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
