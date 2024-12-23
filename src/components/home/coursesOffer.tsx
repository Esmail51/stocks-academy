import React from 'react';
import img1 from '../../assets/images/stock-market.svg';
import img3 from '../../assets/images/financial-report.svg';
import img2 from '../../assets/images/stocks-sell-chart.svg';
import img4 from '../../assets/images/image-VBPCRMD.jpg';

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
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img src={img4} alt="" className='rounded-xl w-full max-h-[730px] object-cover' />
        </div>

        <div className="lg:w-1/2 w-full text-start pt-10 space-y-6">
          <h2 className="text-4xl font-bold">Courses We Offer</h2>
          <h3 className="text-xl font-semibold mt-5">Technical Analysis and Understanding the Stock Market</h3>
          <p className="mt-2">A comprehensive 7-hour seminar course in Toronto covering introductory concepts of the North American Equity stock market.</p>

          <div className="flex flex-col gap-8 mt-10">
            {courses.map((course, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src={course.image} alt="" className="w-12 h-12 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-gray-700">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-start gap-3 mt-10">
            <a
              href="/courses"
              className="inline-block hover:bg-blue-100 hover:text-black font-semibold text-lg px-6 py-3 rounded-lg shadow-lg bg-[#4285F4] text-white"
            >
              Course Packages
            </a>
            <a
              href="/courses"
              className="inline-block hover:bg-blue-100 hover:text-black font-semibold text-lg px-6 py-3 rounded-lg shadow-lg bg-[#4285F4] text-white"
            >
              Membership Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
