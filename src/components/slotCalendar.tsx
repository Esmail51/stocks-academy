import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { IoMdClose } from "react-icons/io";

interface CalendarProps {
    courseId: string;
    onClose: () => void;
}

const CourseCalendar: React.FC<CalendarProps> = ({ courseId, onClose }) => {
    const courses = [
        {
            id: "course1",
            name: "Technical Analysis and Stock Market",
            availableDates: [
                { date: "2024-12-05", price: 399, slots: 6 },
                { date: "2024-12-29", price: 399, slots: 6 },
                { date: "2025-01-03", price: 399, slots: 6 },
            ],
        },
        {
            id: "course2",
            name: "In-Depth Technical Analysis Training",
            availableDates: [
                { date: "2024-12-30", price: 249.00, slots: 10 },
                { date: "2025-01-05", price: 249.00, slots: 10 },
                { date: "2025-01-10", price: 249.00, slots: 10 },
            ],
        },
        {
            id: "course3",
            name: "An Introduction to Options Trading",
            availableDates: [
                { date: "2025-01-02", price: 399, slots: 8 },
                { date: "2025-01-09", price: 399, slots: 8 },
                { date: "2025-01-15", price: 399, slots: 8 },
            ],
        },
    ];

    const course = courses.find((c) => c.id === courseId);

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
    }, []);

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
            ? "bg-googleBlue-500 text-white font-bold rounded-full mb-1"
            : "text-black";
    };

    const handlePayment = () => {
        console.log("Make payment button");
    };

    // Function to handle active date change for navigating months
    const handleActiveDateChange = ({ activeStartDate }: any) => {
        setActiveStartDate(activeStartDate);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4 sm:p-0">
            <div className={`flex flex-col sm:flex-row w-full bg-white shadow-md rounded-lg p-6 relative ${showModal ? 'max-w-3xl' : 'max-w-md'}`}>
                {/* Calendar and Course Details container */}
                <div className="flex-1">
                    {/* Calendar */}
                    {course ? (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                {course.name}
                            </h2>
                            <style>
                                {`
                                    .react-calendar abbr {
                                        text-decoration: none;
                                    }
                                    .react-calendar__navigation button {
                                        color: black;  /* Change navigation icon color (previous & next buttons) */
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

                {/* Course Details */}
                {showModal && modalDetails && (
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-center w-full sm:w-80">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold mb-4">Course Details</h3>
                            <p className="mb-2">
                                <strong>Date:</strong> {modalDetails.date}
                            </p>
                            <p className="mb-2">
                                <strong>Price:</strong> ${modalDetails.price}
                            </p>
                            <p className="mb-4">
                                <strong>Slots Available:</strong> {modalDetails.slots}
                            </p>
                            <button
                                onClick={handlePayment}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
                            >
                                Make Payment
                            </button>
                        </div>
                    </div>
                )}

                {/* Close button */}
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
