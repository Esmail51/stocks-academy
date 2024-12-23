import React from 'react'
import img1 from '../../assets/images/stock-market.svg'
import img3 from '../../assets/images/financial-report.svg'
import img2 from '../../assets/images/stocks-sell-chart.svg'




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

    <section className="py-0 px-4 md:px-16 lg:px-24 relative z-10 bg-gray-100">
      <div className="absolute inset-0"></div>

      <div className="container mx-auto flex flex-col  py-10 z-20 relative gap-10">
        {/* Left Column */}
        <div className=" w-full">
          <h2 className="text-4xl font-bold">Courses We Offer</h2>
          <h2 className="text-xl font-semibold mt-5">Technical Analysis and Understanding the Stock Market</h2>
          <p className="mt-2">A comprehensive 7-hour seminar course in Toronto covering introductory concepts of the North American Equity stock market.</p>

          <div className="flex justify-center gap-3 mt-10">
            <a
              href="/courses"
              className="inline-block bg-blue-100 text-black font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:bg-[#4285F4] hover:text-white"
            >
              Course Packages
            </a>
            <a
              href="/courses"
              className="inline-block bg-blue-100 text-black font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:bg-[#4285F4] hover:text-white"
            >
              Membership Packages
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex flex-wrap gap-10 justify-center mt-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group self-auto text-start md:w-1/2 lg:w-1/2 xl:w-[calc(50%-20px)] max-w-md p-6 bg-white rounded-lg shadow-lg flex items-center hover:scale-105 transition"
              style={{ height: 'auto', minHeight: '150px' }}
            >
              <img
                className="object-cover w-16 h-16 mr-4"
                src={course.image}
                alt=""
              />
              <div>
                <h3 className="text-sm font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700 text-xs hidden group-hover:block transition-all duration-2000 ease-in">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}