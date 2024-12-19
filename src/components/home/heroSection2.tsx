import React from 'react'
import img1 from '../../assets/images/Untitled-design-7.png.webp'


export default function heroSection2() {
    return (
        <section className="relative bg-purple-100  text-black py-10 px-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center   z-20 relative">
                {/* Heading */}
                {/* 
                <div className="lg:w-1/2 mt-12 lg:mt-0  ">
                    <div className="bg-gray-200 rounded-lg  w-72 h-72 lg:w-[500px] lg:h-[500px]">
                        <img src={img1} alt="Location" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div> */}




                {/* Text Content */}
                <div className='lg:w-full text-start'>
                    <div className="flex flex-col justify-start items-center">
                        <div className='flex flex-col items-center'>
                            <h2 className="text-4xl font-bold mb-2">Master the Markets</h2>
                            <h2 className="text-4xl font-bold mb-5">Empower Your Trading with Expert Insights</h2>
                        </div>

                        <div className='flex gap-4 justify-center'>

                            <div className='w-[420px]  p-5 '>

                                <p className="text-lmd leading-relaxed mb-5">
                                    Strictly Stocks Academy offers a series of comprehensive in-person classes held in a state-of-the-art
                                    boardroom in Toronto, Ontario, where professionals of all backgrounds come to learn the tools to become
                                    more informed, efficient, and adept in their analysis of Equity markets, Commodity markets, and Crypto Markets.
                                </p>
                            </div>


                            <div className='w-[420px]  p-5 '>
                                <p className="text-lmd leading-relaxed mb-5">
                                    Studying historic chart patterns and understanding price action using a myriad of technical analysis
                                    indicators allows for more informed, efficient, and profitable decision-making.
                                </p>

                            </div>



                            <div className='w-[420px]  p-5 '>
                                <p className="text-lmd leading-relaxed mb-5 ">
                                    Students dive into a curriculum to equip themselves and refine their knowledge of technical analysis
                                    tools and risk management systems, becoming more resourced and adept investors and traders.
                                </p>

                            </div>



                        </div>

                        <div className="">
                            <a
                                href="/courses"
                                className="inline-block bg-purple-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:text-black"
                            >
                                Explore Courses
                            </a>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}

            </div>
        </section>

    )
}
