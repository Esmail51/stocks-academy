import React from 'react'
import Header from '../components/header'
import img1 from '../../src/assets/images/news.png'
import img2 from '../../src/assets/images/video.png'
import img3 from '../../src/assets/images/analysis.png'
import img4 from '../../src/assets/images/seminar.png'
import img5 from '../../src/assets/images/rb_2148556783.png'

import ScrollToTop from '../components/scrollTop'



export default function MembershipPage() {
    return (
        <section className='   '>
            <Header />
            <ScrollToTop />


            <div className='' >

                <section className=' py-12 bg-gradient-to-r from-purple-600 to-googleBlue-500'>
                    <div className='  gap-20 lg:mx-24 mx-5'>

                            <div>
                                <h1 className='text-5xl font-md mt-2 mb-10 text-center text-white' >Choose the Best Membership Plan</h1>
                                {/* <p className='mt-2 mb-10'>This is the Membership Page. You can add any content here.</p> */}
                              
                            </div>

                            

                        <div className='flex gap-10 justify-center items-center flex-col lg:flex-row    text-black'>
                            {/*2 cards */}

                            <div className='p-5 w-[70%] xl:w-[50%]  text-start flex flex-col justify-between  h-[400px] bg-white    rounded-xl hover:scale-105 transition' >
                                <div>
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2028_10754)"><g filter="url(#filter0_d_2028_10754)"><path d="M31.7693 50.533C13.5577 42.9664 14.4449 31.2772 14.4444 20.5274C21.2066 20.1099 28.812 16.2831 31.7693 14.4219C40.2762 19.5359 45.8418 20.0055 49.3562 20.5274C48.3646 35.9216 46.4338 44.6884 31.7693 50.533Z" fill="url(#paint0_linear_2028_10754)" stroke="url(#paint1_linear_2028_10754)" stroke-width="3.57376"></path></g><path d="M26.2644 35.1266C25.8246 35.1266 25.442 34.8255 25.3387 34.398L24.2775 30.0072C24.0725 29.1592 25.0208 28.5049 25.7408 28.9973L27.9585 30.5139C28.3744 30.7984 28.9399 30.7096 29.2487 30.3114L31.1305 27.8846C31.5118 27.3929 32.2545 27.3929 32.6358 27.8846L34.5176 30.3114C34.8263 30.7096 35.3919 30.7984 35.8078 30.5139L38.0254 28.9973C38.7455 28.5049 39.6937 29.1592 39.4888 30.0072L38.4276 34.398C38.3242 34.8255 37.9416 35.1266 37.5018 35.1266H26.2644ZM38.2515 37.1798C38.2515 37.5904 37.8876 37.8641 37.3417 37.8641H26.4246C25.8787 37.8641 25.5148 37.5904 25.5148 37.1798C25.5148 36.8018 25.8212 36.4954 26.1992 36.4954H37.5671C37.945 36.4954 38.2515 36.8018 38.2515 37.1798Z" fill="white"></path></g><defs><filter id="filter0_d_2028_10754" x="2.64844" y="6.32031" width="58.5977" height="60.1406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2028_10754"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2028_10754" result="shape"></feBlend></filter><linearGradient id="paint0_linear_2028_10754" x1="32.0019" y1="51" x2="47.4225" y2="20.6963" gradientUnits="userSpaceOnUse"><stop stop-color="#BD6E1A"></stop><stop offset="1" stop-color="#F5A34C"></stop></linearGradient><linearGradient id="paint1_linear_2028_10754" x1="49.002" y1="17.5" x2="22.502" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#BD6E1A"></stop><stop offset="1" stop-color="#F8A54E"></stop></linearGradient><clipPath id="clip0_2028_10754"><rect width="65" height="65" fill="white"></rect></clipPath></defs></svg>

                                    <h1 className='text-xl font-semibold'>Semi Annual Membership</h1>
                                    <p className='text-4xl mt-8 font-bold'>$ 669.99 <span className='font-semibold text-xl'> + Tax</span> </p>
                                    {/* <p className='text-2xl font-semibold' > </p> */}

                                </div>
                                <button className='bg-googleBlue-500 hover:bg-blue-300 mt-5'>Subscribe</button>
                            </div>
                            <div className='p-5 w-[70%] xl:w-[50%]  text-start flex flex-col justify-between h-[400px] bg-white rounded-xl hover:scale-105 transition'>
                                <div>
                                    <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2028_10786)"><g filter="url(#filter0_d_2028_10786)"><path d="M32.5389 50.533C14.3272 42.9664 15.2145 31.2772 15.2139 20.5274C21.9762 20.1099 29.5815 16.2831 32.5389 14.4219C41.0457 19.5359 46.6114 20.0055 50.1257 20.5274C49.1342 35.9216 47.2034 44.6884 32.5389 50.533Z" fill="url(#paint0_linear_2028_10786)" stroke="url(#paint1_linear_2028_10786)" stroke-width="3.57376"></path></g><path d="M27.034 35.1266C26.5942 35.1266 26.2116 34.8255 26.1083 34.398L25.047 30.0072C24.8421 29.1592 25.7903 28.5049 26.5104 28.9973L28.728 30.5139C29.1439 30.7984 29.7095 30.7096 30.0183 30.3114L31.9001 27.8846C32.2813 27.3929 33.024 27.3929 33.4053 27.8846L35.2871 30.3114C35.5959 30.7096 36.1614 30.7984 36.5773 30.5139L38.795 28.9973C39.5151 28.5049 40.4633 29.1592 40.2583 30.0072L39.1971 34.398C39.0938 34.8255 38.7112 35.1266 38.2714 35.1266H27.034ZM39.021 37.1798C39.021 37.5904 38.6571 37.8641 38.1112 37.8641H27.1941C26.6483 37.8641 26.2844 37.5904 26.2844 37.1798C26.2844 36.8018 26.5908 36.4954 26.9687 36.4954H38.3366C38.7146 36.4954 39.021 36.8018 39.021 37.1798Z" fill="white"></path></g><defs><filter id="filter0_d_2028_10786" x="3.41797" y="6.32031" width="58.5977" height="60.1406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2028_10786"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2028_10786" result="shape"></feBlend></filter><linearGradient id="paint0_linear_2028_10786" x1="32.7715" y1="51" x2="48.1921" y2="20.6963" gradientUnits="userSpaceOnUse"><stop stop-color="#AB880D"></stop><stop offset="1" stop-color="#DAC54C"></stop></linearGradient><linearGradient id="paint1_linear_2028_10786" x1="49.7715" y1="17.5" x2="23.2715" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#AB880D"></stop><stop offset="1" stop-color="#DAC54C"></stop></linearGradient><clipPath id="clip0_2028_10786"><rect width="65" height="65" fill="white" transform="translate(0.769531)"></rect></clipPath></defs></svg>


                                    <h1 className='text-xl font-semibold'>Annual Membership</h1>
                                    <p className='text-4xl mt-8 font-bold'>$ 1049.00 <span className='font-semibold text-xl'> + Tax</span></p>
                                    {/* <p className='text-2xl font-semibold' > + Tax</p> */}



                                </div>
                                <button className='bg-googleBlue-500 hover:bg-blue-300 mt-5'>Subscribe</button>
                            </div>
                            <div className='md:block hidden w-full'>
                                <img src={img5} alt="" className='w-full  ' />
                            </div>

                       
                        </div>


                    </div>
                </section>

                <section className='my-10 mt-10 lg:mx-24 mx-5'>
                    <div className='flex flex-col items-center mb-10 '>
                        <h1 className='text-4xl font-bold mb-5'>Community Membership Benefits</h1>
                        <p className='text-lg lg:w-[80%] mb-5' >Membership includes access to a host of resources, all available and accessible from your phone or computer. Currently we are operating on Slack, but transitioning to our own application.</p>
                    </div>
                    {/*cards*/}
                    <div>
                        <div className='grid lg:grid-cols-2 gap-5 grid-cols-1'>

                            <div className='p-5 text-start rounded-lg  shadow-md hover:shadow-gray-400  hover:cursor-pointer transition-all'>
                                <img src={img1} alt="" />
                                <h3 className='text-xl font-semibold mb-2'>Automated News Channels</h3>
                                <p>Our automated news channels provide you with a one stop source for up to date news articles, that you can access directly both from your phone and internet browser.</p>
                            </div>
                            <div className='p-5 text-start rounded-lg  shadow-md hover:shadow-gray-400  hover:cursor-pointer transition-all'>
                                <img src={img2} alt="" />

                                <h3 className='text-xl font-semibold mb-2'>Weekly Coverage Videos</h3>
                                <p>Weekly coverage videos provide you with snippets of technical analysis coverage of general market conditions & charting patterns on stock tickers in a myriad of sectors.</p>
                            </div>
                            <div className='p-5 text-start rounded-lg  shadow-md hover:shadow-gray-400  hover:cursor-pointer transition-all'>
                                <img src={img3} alt="" />

                                <h3 className='text-xl font-semibold mb-2'>Charts & Technical Analysis</h3>
                                <p>Technical analysis and updated charts provided daily, accessible both on your phone and your desktop browser.</p>
                            </div>
                            <div className='p-5 text-start rounded-lg  shadow-md hover:shadow-gray-400  hover:cursor-pointer transition-all'>
                                <img src={img4} alt="" />

                                <h3 className='text-xl font-semibold mb-2'>In Person Seminars</h3>
                                <p>Access to Drop-in live in person seminars in our boardroom:</p>
                                <ul className=' list-disc ms-5' >
                                    <li>Charting & technical analysis</li>
                                    <li>Utilizing technical analysis tools & Indicators on charting platforms</li>
                                    <li>A live hands-on approach to charting with instructors</li>
                                </ul>
                            </div>
                        </div>





                    </div>


                </section>

            </div>

        </section>
    )
}
