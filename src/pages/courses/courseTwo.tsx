import React, { useState } from 'react'
import Header from '../../components/header'
import img1 from '../../assets/images/Quality Classroom Picture 2 .avif';
import ScrollToTop from '../../components/scrollTop';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CourseCalendar from '../../components/slotCalendar';

interface CourseProps {
  onLoginOpen: () => void;
}

const CourseTwo = ({ onLoginOpen }: CourseProps) => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalender] = useState(false);

  const closeCalendar = () => {
    setShowCalender(false);
  }

  const handleEntrollButton = () => {
    const userDetails = Cookies.get('userDetails')
    if (!userDetails) {
      onLoginOpen()
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
            <h1 className='text-4xl font-bold text-blue-600 mb-5 text-start'>In-Depth Technical Analysis Training</h1>
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-20 gap-5'>
            <div className='lg:w-1/2 w-full '>
              <img src={img1} alt='Classroom' className='w-full rounded-lg object-cover h-full' />

            </div>
            <div className='lg:w-1/2 w-full text-start'>
              <div>
                <div className='mb-6 pt-2'>
                  <div className=' text-start  text-gray-700'>
                    <div>
                      <p className='font-semibold text-black'>Price: $ 249.00<span className='font-semibold text-xs'> +Tax</span></p>
                      <p className='font-semibold'>Pre-requisites:  Complete of Intro Course. </p>
                    </div>
                    <button className="inline-block bg-blue-600 text-white font-semibold text-sm px-3 py-2 mt-2 rounded-lg shadow-lg  hover:bg-purple-100 transition hover:text-black" onClick={handleEntrollButton}>Enroll Now</button>
                  </div>


                </div>
                <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 text-start'>Advanced Technical Analysis Seminar Series</h3>
                  <p>A Sequel to the Intro seminar series, where students dive into a comprehensive 4 hour seminar course in Toronto covering an in-depth understanding of  technical analysis tools; application of a multitude of technical analysis indicators, along with effective risk management strategies to optimize profitable investing and trading systems.
                  </p>
                </div>
              </div>

              <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4 mt-2 text-start'>Interactive and Hands-On Learning Experience</h3>
                <p className='pt-2'>Students will learn an interactive style boardroom limited to 6 persons, where students will gain hands-on knowledge of diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management & swing trading and position management techniques.
                </p>
              </div>

            </div>
          </div>
          {showCalendar ? <CourseCalendar courseId='course2' coursePrice={249} onClose={closeCalendar} /> : null}

        </div>


        {/* Price: $399.00 + Tax 


Boardroom Location Details: 

Course Dates & Enrollment Details:     [ Course Enrollment Button ]  */}

      </section>

    </div>
  )
}
export default CourseTwo;