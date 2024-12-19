import React from 'react'
import Header from '../../components/header'
import img1 from '../../assets/images/Classroom3 .jpeg';


export default function CourseFour() {
  return (
    <div className='bg-purple-100' >
      <Header></Header>

      <section className=' container py-12 px-4 md:px-16 lg:px-24'>
        <div>

          <div>
            <h1 className='text-4xl font-bold text-gray-900 mb-4 text-start'>Technical Analysis and Understanding the Stock Market </h1>
            <p className='text-lg text-gray-700 mb-8 text-start'>
              A comprehensive 7 hour seminar course in Toronto covering introductory concepts of  the North American Equity stock market.

            </p>

          </div>
          <div className='flex gap-20'>
            <div className='w-1/2 '>
              <img src={img1} alt='Classroom' className='w-full rounded-lg object-cover h-full' />

            </div>
            <div className='w-1/2 text-start'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 text-start'>Learn by communicating and discussing around a boardroom table</h3>
                <div>
                  <p>Students will learn an interactive style boardroom limited to 6 persons, where students will gain hands-on knowledge of diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management & swing trading techniques.</p>
                </div>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 mt-2 text-start'>Learn by consistently  practising</h3>
              <div>
                <p>Students are asked to bring their laptops to engage directly with charting applications to learn by doing.</p>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 mt-2 text-start'>Learn forever to walk on the path to mastery</h3>
              <div>
                <p className='pb-2'>We believe in teaching you to use tools that will allow you to become a more informed, effective, and profitable investor and/or trader. </p>
                <p>This Introduction Courts provides students with working knowledge of basic technical analysis skills including charting, understanding and applying indicators into analysis, a review on historic market timelines and reviewing price patterns throughout market history and historic market liquidity events</p>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold text-start text-gray-900   my-4'>Booking Details</h2>
                <div className=' text-start  text-gray-700'>
                  <div>
                    <p className='font-semibold'>Price: $399.00 + Tax </p>
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
