import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa"; // Import icons for each card
import { useNavigate } from "react-router-dom";
import { getAllClasses } from "../services/classes";
import { ThreeDots } from 'react-loader-spinner';

interface CalendarProps {
    courseId: string;
    onClose: () => void;
}

interface CourseDate {
    date: string;
    statTime: string;
    endTime: string;
    price: number;
    slots: number;
}

interface Course {
    id: string;
    courseId: string;
    name: string;
    type: string;
    availableDates: CourseDate[];
}

const CourseCalendar: React.FC<CalendarProps> = ({ courseId, onClose }) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchClasses = async () => {
        const response = await getAllClasses(1, 1, "");
        const transformedCourses: Course[] = transformCourseData(response.classes);
        console.log(transformedCourses);
        setCourses(transformedCourses);
        setLoading(false); // Set loading to false after data is fetched
    };

    const transformCourseData = (data: any[]): Course[] => {
        return data.reduce((acc: Course[], course) => {
            const courseExists = acc.find((c) => c.type === course.type);
            const formattedDate = new Date(course.date).toISOString().split('T')[0];
            if (courseExists) {
                courseExists.availableDates.push({
                    date: formattedDate,
                    statTime: course.startTime,
                    endTime: course.endTime,
                    price: 399,
                    slots: course.availableSeats,
                });
            } else {
                acc.push({
                    id: `course${acc.length + 1}`,
                    courseId: course._id,
                    name: course.courseName,
                    type: course.type,
                    availableDates: [
                        {
                            date: formattedDate,
                            statTime: course.startTime,
                            endTime: course.endTime,
                            price: 399,
                            slots: course.availableSeats,
                        },
                    ],
                });
            }
            return acc;
        }, []);  
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    console.log('courses:', courses);
    const course = courses.find((c: Course) => c.type === courseId);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [modalDetails, setModalDetails] = useState<any>(null);
    const [activeStartDate, setActiveStartDate] = useState<Date | undefined>(undefined);

    useEffect(() => {
        if (course && course.availableDates.length > 0) {
            const firstAvailableDate = new Date(Math.min(...course.availableDates.map(date => Date.parse(date.date))));
            setModalDetails(course.availableDates[0]);
            setSelectedDate(firstAvailableDate);
            setActiveStartDate(firstAvailableDate);
            setShowModal(true);
        }
    }, [course]);

    const formatDateToLocal = (date: Date) => {
        return date.toLocaleDateString("en-CA");
    };

    const handleDateClick = (date: Date) => {
        const formattedDate = formatDateToLocal(date);
        if (course) {
            const selectedCourseDate = course.availableDates.find(
                (item) => item.date === formattedDate
            );
            if (selectedCourseDate) {
                setModalDetails(selectedCourseDate);
                setSelectedDate(date);
                setShowModal(true);
            }
        }
    };

    const handleTileClassName = ({ date, view }: any) => {
        if (view !== "month" || !course) return "";
        const formattedDate = formatDateToLocal(date);
        const isAvailable = course.availableDates.some((item) => item.date === formattedDate);
        return isAvailable
            ? "bg-googleBlue-500 text-white font-bold rounded-full max-w-10 max-h-10 flex justify-center items-center mx-3"
            : "text-black";
    };

    const handlePayment = () => {
            console.log("Payment for course:", course);
    if (course) {
        navigate('/stripe', { state: { date: selectedDate, courseId: course.courseId, price: modalDetails.price } });
    }
    };

    const handleActiveDateChange = ({ activeStartDate }: any) => {
        setActiveStartDate(activeStartDate);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4 sm:p-0">
            <div className={`flex flex-col sm:flex-row w-full bg-[#4285F4] shadow-md rounded-lg p-6 relative ${showModal ? 'max-w-4xl' : 'max-w-md'}`}>
                <div className="flex-1">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <ThreeDots
                                visible={true}
                                height="80"
                                width="80"
                                color="white"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </div>
                    ) : course ? (
                        <>
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                {course.name}
                            </h2>
                            <style>
                                {`
                                    .react-calendar {
                                        height: 380px; /* Adjust this value as needed */
                                        overflow-y: auto; /* Allow scrolling if the content overflows */
                                         border-radius: 10px;
                                    }
                                    .react-calendar abbr {
                                        text-decoration: none;
                                    }
                                    .react-calendar__navigation button {
                                        color: black;
                                        font-size: 1.2em;
                                    }
                                        
                                `}
                            </style>
                            <Calendar
                                onClickDay={handleDateClick}
                                tileClassName={handleTileClassName}
                                className="text-md border text-center py-2 px-5 w-full bg-white text-black"
                                showNeighboringMonth={false}
                                activeStartDate={activeStartDate}
                                onActiveStartDateChange={handleActiveDateChange}
                            />
                        </>
                    ) : (
                        <p className="text-red-500">Error: Course not found!</p>
                    )}
                </div>
                {showModal && modalDetails && (
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-center w-full sm:w-80 ">
                        <div className="p-6 border bg-white shadow-lg h-full mt-12" style={{ borderRadius: '10px' }}>
                            <h3 className="text-xl font-bold mb-4">Course Details</h3>
                            <div className="mb-4 flex items-center space-x-4">
                                <FaCalendarAlt className="text-blue-500" size={24} />
                                <div>
                                    <p><strong>Date:</strong> {modalDetails.date}</p>
                                    <p><strong>Time:</strong> {modalDetails.statTime} - {modalDetails.endTime}</p>
                                </div>
                            </div>
                            <div className="mb-4 flex items-center space-x-4">
                                <FaTag className="text-green-500" size={24} />
                                <div>
                                    <p><strong>Price:</strong> ${modalDetails.price}</p>
                                </div>
                            </div>
                            <div className="mb-4 flex items-center space-x-4">
                                <FaClock className="text-orange-500" size={24} />
                                <div>
                                    <p><strong>Slots Available:</strong> {modalDetails.slots}</p>
                                </div>
                            </div>
                            <button
                                onClick={handlePayment}
                                className="w-full border bg-[#4285F4] text-white py-2 rounded-lg hover:bg-white hover:text-black"
                            >
                                Make Payment
                            </button>
                        </div>
                    </div>
                )}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
                >
                    <IoMdClose size={24} />
                </button>
            </div>
        </div>
    );
};

export default CourseCalendar;
