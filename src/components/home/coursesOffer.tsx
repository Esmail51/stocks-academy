import React from 'react'
import img1 from '../../assets/images/stock1.jpg'
import img3 from '../../assets/images/stock2.jpg'
import img2 from '../../assets/images/stock3.jpg'




export default function CoursesOffer() {

    const courses = [
        {
            title: 'Learn through interactive communication and discussion around a boardroom table',
            description: 'Students will learn in an interactive style boardroom limited to 6 persons,  gaining hands-on knowledge of diverse aspects of technical analysis, charting tools, and in-depth understanding of indicators, broader markets, risk management & swing trading techniques.',
            image: img1
        },
        {
            title: 'Learn by consistent practice.',
            description: 'Students are asked to bring their laptops to engage directly with charting applications to learn by doing.',
            image: img2

        }, {
            title: 'Learn forever to walk on the path to mastery.',
            description: 'We believe in teaching you to use lifelong tools that will allow you to become a more informed, effective, and profitable investor and/or trader.',
            image: img3

        }
    ]
    return (
        <section className=' bg-purple-600 from-purple-600 to-blue-500 text-white py-0 px-4 md:px-16 lg:px-24 relative'>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-75"></div>

            <div className='container mx-auto  flex  lg:flex-row  p-10   z-20 relative'>
                <div className=' text-start w-1/3'>
                    <h2 className='text-4xl text-start mt-0 font-bold'>Courses We Offer</h2>
                    <h2 className='text-xl text-start font-semibold w-[400px] mt-5'>Technical Analysis and Understanding the Stock Market </h2>
                    <p className='w-[400px] mt-5'>A comprehensive 7 hour seminar course in Toronto covering introductory concepts of the North American Equity stock market.</p>
                    
                <div className='flex flex-row items-start gap-3 mt-10' >
                <a
                        href="/courses"
                        className="inline-block bg-purple-100 text-black font-semibold text-sm  px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 hover:text-white"
                    >
                        Course Packages

                    </a>
                    <a
                        href="/courses"
                        className="inline-block bg-purple-100 text-black font-semibold text-sm  px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 hover:text-white"
                    >
                        Membership Packages
                    </a>
                </div>

                </div>
                <div className='w-2/3 flex gap-3 '>
                    {
                        courses.map((course, index) => (
                            <div key={index} className=' w-[300px] rounded-lg shadow-lg  bg-white text-black  hover:scale-105 transition'>
                                <img className='object-cover w-full h-[200px] rounded-lg ' src={course.image} alt='' />
                                <div className='p-4 pt-0'>
                                    <h3 className='text-lg text-start pb-4 font-semibold'>{course.title}</h3>
                                    <p className='text-sm text-start'>{course.description}</p>
                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>




        </section>
    )
}