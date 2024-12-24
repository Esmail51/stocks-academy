import React from 'react'
import img1 from '../../assets/images/Untitled-design-7.png.webp'


export default function heroSection2() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-16 lg:px-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-medium text-center mb-12">
          Master the Markets with <span >Strictly Stocks Academy</span>
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          Join our comprehensive in-person classes held in a state-of-the-art boardroom
          in Toronto, Ontario. Empower yourself with the tools and knowledge to excel
          in Equity, Commodity, and Crypto market analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>

            <h3 className="text-xl font-bold mb-4 text-center">Historic Chart Patterns</h3>
            <p className="text-sm text-center">
              Study historic trends and price actions using advanced technical analysis
              tools, empowering you to make smarter investment decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>


            <h3 className="text-xl font-bold mb-4 text-center">Price Action Tools</h3>
            <p className="text-sm text-center">
              Learn to analyze and interpret stock, gold, or cryptocurrency price
              movements, gaining the ability to systemize your decision-making process.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 text-Red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>


            <h3 className="text-xl font-bold mb-4 text-center">Risk Management Systems</h3>
            <p className="text-sm text-center">
              Refine your understanding of technical analysis and build robust risk
              management frameworks to become a confident investor or trader.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/courses"
            className="inline-block bg-googleBlue-500 text-gray-200 font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition duration-300"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>



  )
}
