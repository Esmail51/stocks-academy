import React from 'react'
import Header from '../../components/header'
import img1 from '../../assets/images/Classroom3 .jpeg';


export default function CourseFour() {
  return (
    <div className='' >
      <Header></Header>

      <section className='mt-20  container py-12 px-4 md:px-16 lg:px-24'>
        <div>

          <div>
            <h1 className='text-4xl font-bold text-gray-900 mb-4 text-start'>COMMUNITY MEMBERSHIP </h1>
            <p className='text-lg text-gray-700 mb-8 text-start'>
            Membership includes access to a host of resources, all available and accessible from your phone or computer. Currently we are operating on Slack, but transitioning to our own application. 

            </p>

          </div>
          <div className='flex flex-col lg:flex-row lg:gap-20 gap-5'>
            <div className='lg:w-1/2 w-full '>
              <img src={img1} alt='Classroom' className='w-full rounded-lg object-cover h-full' />

            </div>
            <div className='lg:w-1/2 w-full text-start'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 text-start'>Automated News Channels </h3>
                <div>
                  <p>Our automated news channels provide you with a one stop source for up to date news articles, that you can access directly both from your phone and internet browser.</p>
                </div>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 mt-2 text-start'>Weekly Coverage Videos</h3>
              <div>
                <p>Weekly coverage videos provide you with snippets of technical analysis coverage of general market conditions & charting patterns on stock tickers in a myriad of sectors. </p>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 mt-2 text-start'>Charts & Technical Analysis</h3>
              <div>
                <p className='pb-2'>Technical analysis and updated charts provided daily, accessible both on your phone and your desktop browser. </p>
              </div>
              <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 text-start'>In Person Seminars </h3>
              <p>Access to Drop-in live in person seminars in our boardroom: </p>
              <ul className=' list-disc ms-5'>
                <li>Charting & technical analysis </li>
                <li>Utilizing technical analysis tools & Indicators on charting platforms</li>
                <li>A live hands-on approach to charting with instructors</li>
              </ul>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold text-start text-gray-900   my-4'>SLACK MEMBERSHIP ACCESS</h2>
                <div className=' flex text-start gap-3  text-white'>
                  <div className='p-4 bg-purple-600 rounded-xl '>
                    <p className='font-semibold'>Semi Annual Membership </p>
                    <p className='font-semibold'>Price: $669.99 + Tax  </p>
                  </div>
                  <div className='p-4 bg-purple-600 rounded-xl'>
                  <p className='font-semibold'>Annual Membership </p>

                    <p className='font-semibold'>Price:  $1049.00 + Tax  </p>
                  </div>
                  {/* <button className="inline-block bg-purple-500 text-white font-semibold text-sm px-3 py-2 mt-2 rounded-lg shadow-lg  hover:bg-gray-100 hover:text-black">Course Enrollment</button> */}
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
