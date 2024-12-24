import React from 'react';
import img1 from '../../assets/images/stock-market.svg';
import img3 from '../../assets/images/financial-report.svg';
import img2 from '../../assets/images/stocks-sell-chart.svg';
import img4 from '../../assets/images/flux-image.com_trading-at-dusk.webp';

export default function CoursesOffer() {
  const courses = [
    {
      title: 'Learn by consistent practice.',
      description: 'Students are asked to bring their laptops to engage directly with charting applications to learn by doing.',
      image: img2
    },
    {
      title: 'Learn forever to walk on the path to mastery.',
      description: 'We believe in teaching you to use lifelong tools that will allow you to become a more informed, effective, and profitable investor and/or trader.',
      image: img3
    },
    {
      title: 'Learn through interactive communication and discussion around a boardroom table',
      description: 'Students will learn in an interactive style boardroom limited to 6 persons, gaining hands-on knowledge of diverse aspects of technical analysis, charting tools, and in-depth understanding of indicators, broader markets, risk management & swing trading techniques.',
      image: img1
    }
  ];

  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 relative z-10">
       <h2 className="text-4xl font-medium">Courses We Offer</h2>
          <h3 className="text-xl font-normal mt-5">Technical Analysis and Understanding the Stock Market</h3>
          <p className="mt-2 mb-5 text-gray-600">A comprehensive 7-hour seminar course in Toronto covering introductory concepts of the North American Equity stock market.</p>
      <div className="container mx-auto flex items-stretch flex-col lg:flex-row gap-3">
        
        <div className="lg:w-1/2 w-full flex items-center justify-center mt-3">
          <img src={img4} alt="" className='rounded-xl w-full max-h-[500px] object-cover' />
        </div>

        <div className="lg:w-1/2 w-full text-start p-4 flex-col justify-between">
         

          <div className="flex flex-col gap-4 justify-around">
            {courses.map((course, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src={course.image} alt="" className="w-12 h-12 object-cover" />
                <div>
                  <h3 className="text-lg font-medium">{course.title}</h3>
                  <p className="text-gray-700">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-start gap-3 mt-10">
            <a
              href="/courses"
              className="inline-block hover:bg-white hover:text-black font-medium text-medium px-4 py-4 rounded-full shadow-lg bg-[#4285F4] text-white"
            >
              Course Packages
            </a>
            <a
              href="/courses"
              className="inline-block hover:bg-white hover:text-black font-medium text-medium px-4 py-4 rounded-full shadow-lg bg-[#4285F4] text-white"
            >
              Membership Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
