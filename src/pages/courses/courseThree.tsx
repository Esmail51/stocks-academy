import React, { useState } from 'react'
import Header from '../../components/header'
import img1 from '../../assets/images/Quality Classroom Picture .avif';
import ScrollToTop from '../../components/scrollTop';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CourseCalendar from '../../components/slotCalendar';

interface CourseProps {
  onLoginOpen: () => void;
}

const CourseThree = ({ onLoginOpen }: CourseProps) => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalender] = useState(false);

  const closeCalendar = () => {
    setShowCalender(false);
  }

  const handleEntrollButton = () => {
    const userDetails = Cookies.get('userDetails')
    if (!userDetails) {
      onLoginOpen();
    } else {
      console.log("Logged in");
      setShowCalender(true);
    }
  }
  return (
    <div className='' >
      <ScrollToTop />

      <section className='  container py-12 px-4 md:px-16 lg:px-24'>
        <div>

          <div>
            <h1 className='text-4xl font-bold text-blue-600 mb-4 text-start'>An Introduction to Options Trading</h1>
            <p className='text-lg text-gray-700 mb-8 text-start'>
              A comprehensive 5 hour class in Toronto covering introductory concepts of Options Trading and application of Options Trading to diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management &  Options Trading Techniques.

            </p>

          </div>
          <div className='flex flex-col lg:flex-row lg:gap-20 gap-5'>
            <div className='lg:w-1/2 w-full'>
              <img src={img1} alt='Classroom' className='w-full rounded-lg object-cover h-[420px]' />

            </div>
            <div className='lg:w-1/2 w-full text-start'>
              <div>
                <div className='mb-6 pt-2'>
                  <div className=' text-start  text-gray-700'>
                    <div>
                      <p className='font-semibold text-black'>Price: $ 399.00<span className='font-semibold text-xs'> +Tax</span></p>
                      <p className='font-semibold'>
                        Pre-requisites: A working knowledge of Stock Market Trading and 5 + years of exposure to
                        stock market investing & Trading.

                      </p>

                    </div>
                    <button className="inline-block bg-blue-600 text-white font-semibold text-sm px-3 py-2 mt-2 rounded-lg shadow-lg  hover:bg-purple-100 transition hover:text-black" onClick={handleEntrollButton}>Enroll Now</button>
                  </div>


                </div>
                <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 text-start'>Introduction to Options Trading Seminar</h3>
                  <p>A comprehensive 5 hour class in Toronto covering introductory concepts of Options Trading and application of Options Trading to diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management &  Options Trading Techniques. </p>
                </div>
              </div>
              <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 mt-2 text-start'>Key Concepts and Risk Management Focus</h3>
                <p>An Introduction to understanding of Options Trading, a look at Options Chain, an Understanding of conceptions including theta, beta, options volume, expiry, decay, and prioritizing the emphasis of risk management. . </p>
              </div>


            </div>
          </div>

          {showCalendar ? <CourseCalendar courseId='options' coursePrice={399} onClose={closeCalendar} /> : null}
        </div>


        {/* Price: $399.00 + Tax 


Boardroom Location Details: 

Course Dates & Enrollment Details:     [ Course Enrollment Button ]  */}

      </section>

    </div>
  )
}

export default CourseThree;