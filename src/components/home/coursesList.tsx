import React from "react";
import img1 from '../../assets/images/Old Classroom Teaching_edited.avif';
import img2 from '../../assets/images/Quality Classroom Picture 2 .avif';
import img3 from '../../assets/images/Quality Classroom Picture .avif';
import img4 from '../../assets/images/Classroom Teaching.avif';
import Calendar from "../calendar";
import { Link } from "react-router-dom";

const CoursesList = () => {
    return (
        <>
            <section className="bg-gray-50 py-5 px-8 lg:px-20">
                <div className="text-start mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Academy Packages</h2>
                    <h2 className="text-2xl font-semibold mt-2" >Stock Market & Technical Analysis</h2>

                    <p className="text-gray-600 mt-4">
                        A comprehensive 7 hour seminar course in Toronto covering introductory concepts of  the North American Equity stock market.
                    </p>
                    <p className="text-gray-600 mt-4" >Students will learn an interactive style 
                        boardroom limited to 6 persons, where students will gain hands-on knowledge of 
                        diverse aspects of technical analysis, charting tools, 
                        understanding of indicators, broader markets, risk management tools. </p>
                        {/* <p className="text-gray-600 mt-4">
                    Explore our range of packages tailored to enhance your trading knowledge.
                </p> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
                    {[
                        {
                            id: 1,
                            image: img1,
                            heading: "Introduction to Technical Analysis and Understanding the Stock Market",
                            content: "A comprehensive 7 hour seminar course in Toronto covering introductory concepts of  the North American Equity stock market. Students will learn an interactive style boardroom limited to 6 persons, where students will gain hands-on knowledge of diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management tools.",
                            page:'intro_to_technical_analysis_and_understanding'
                        },
                        {
                            id: 2,
                            image: img2,
                            heading: "In-Depth Technical Analysis Training",
                            content: "A comprehensive 5-hour class in Toronto covering advanced technical analysis, charting tools, understanding of indicators, broader markets, risk management & swing trading techniques.",
                            page:'in_depth_technical_analysis_training'

                        },
                        {
                            id: 3,
                            image: img4,
                            heading: "Options 101: An Introduction to Options Trading",
                            content: "A comprehensive 5 hour class in Toronto covering introductory concepts of Options Trading and application of Options Trading to diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management &  Options Trading Techniques.", 
                            page:'an_introduction_to_options_trading'

                        },
                        {
                           
                            id: 4,
                            image: img3,
                            heading: "3-Month Academy Package Inclusive of Both 1+2 (MOST POPULAR)",
                            content: "A comprehensive 5-hour class in Toronto covering introductory and advanced concepts of the stock market and diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management & swing trading techniques.",
                            page:'membership'

                        },
                    ].map((packageItem) => (
                        <div
                            key={packageItem.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full transition-transform transform hover:scale-105"
                        >
                            <img
                                src={packageItem.image}
                                alt={packageItem.heading}
                                className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {packageItem.heading}
                                </h3>
                                <p className="text-sm text-gray-600 mt-4 flex-grow">{packageItem.content}</p>
                                <Link to={packageItem.page}>
                                <button className="mt-6 px-6 w-fit py-2 hover:bg-purple-100 bg-purple-600 hover:text-black text-white rounded-lg transition">
                                    Book Now →
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



        </>


    );
};
export default CoursesList;