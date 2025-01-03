import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getAllClasses } from "../services/classes";
import { ThreeDots } from "react-loader-spinner";
import { FaClock, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { parse, format } from "date-fns";

interface CalendarProps {
    courseId: string;
    coursePrice: number;
    onClose: () => void;
}

interface CourseDate {
    date: string;
    statTime: string;
    endTime: string;
    price: number;
    slots: number;
    tax: number;
}

interface Course {
    id: string;
    courseId: string;
    name: string;
    type: string;
    availableDates: CourseDate[];
}

const CourseCalendar: React.FC<CalendarProps> = ({ courseId, onClose, coursePrice }) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchClasses = async () => {
        const response = await getAllClasses(1, 1, "");
        const transformedCourses: Course[] = transformCourseData(response.classes);
        setCourses(transformedCourses);
        setLoading(false);
    };

    const transformCourseData = (data: any[]): Course[] => {
        return data.reduce((acc: Course[], course) => {
            const courseExists = acc.find((c) => c.type === course.type);
            const formattedDate = new Date(course.date).toISOString().split("T")[0];
            if (courseExists) {
                courseExists.availableDates.push({
                    date: formattedDate,
                    statTime: course.startTime,
                    endTime: course.endTime,
                    price: coursePrice,
                    slots: course.availableSeats,
                    tax: course.tax ? course.tax : 1
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
                            price: coursePrice,
                            slots: course.availableSeats,
                            tax: course.tax ? course.tax : 1
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

    const course = courses.find((c: Course) => c.type === courseId);

    const handlePayment = (dateDetails: CourseDate) => {

        const startDateTime = formatDateTimeForGoogleCalendar(dateDetails.date, dateDetails.statTime);
        const endDateTime = formatDateTimeForGoogleCalendar(dateDetails.date, dateDetails.endTime);

        navigate("/stripe", {
            state: {
                date: dateDetails.date,
                courseId: course?.courseId,
                courseName: course?.name,
                startTime: startDateTime,
                endTime: endDateTime,
                price: dateDetails.price,
                tax: dateDetails.tax ? dateDetails.tax : 1
            },
        });
    };

    const formatDateTimeForGoogleCalendar = (date: string, time: string) => {
        const dateTimeString = `${date.split("T")[0]}T${time}`;
        const parsedDate = parse(dateTimeString, "yyyy-MM-dd'T'h:mm a", new Date());
        return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    };

    const groupDatesByMonth = (dates: CourseDate[]) => {
        return dates.reduce((acc, dateDetails) => {
            const date = new Date(dateDetails.date);
            const monthName = date.toLocaleString("default", { month: "long" });
            const key = `${monthName}`;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(dateDetails);
            return acc;
        }, {} as Record<string, CourseDate[]>);
    };

    const groupedDates = course ? groupDatesByMonth(course.availableDates) : {};

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4 sm:p-0">
            <div className="flex flex-col w-full bg-white shadow-md rounded-lg p-4 sm:p-6 relative max-w-lg sm:max-w-xl lg:max-w-4xl">
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4">
                    {loading ? null : course?.name}
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <ThreeDots
                            visible={true}
                            height="60"
                            width="60"
                            color="#4285F4"
                            ariaLabel="three-dots-loading"
                        />
                    </div>
                ) : course ? (
                    <div
                        className="space-y-4 overflow-y-auto  max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pe-2"
                    >
                        {Object.entries(groupedDates).map(([month, dates], index) => (
                            <div key={index}>
                                <h3 className="text-sm sm:text-md font-bold text-gray-800 mb-2 border-gray-300 pb-1">
                                    {month}
                                </h3>

                                {/* Grid container for two columns */}
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                                >
                                    {dates.map((dateDetails, index) => {
                                        const dateParts = new Date(dateDetails.date)
                                            .toDateString()
                                            .split(" ");
                                        const [weekday, , day] = dateParts;
                                        // const rowColor = index % 2 === 0 ? "text-blue-600" : "text-gray-500";
                                        return (
                                            <div
                                                key={index}
                                                className={`flex flex-col sm:flex-row items-center sm:items-stretch border rounded-lg p-2 bg-white shadow-md space-y-3 sm:space-y-0 sm:space-x-6`}
                                            >
                                                <div
                                                    className={`flex flex-col items-center justify-center w-full sm:w-20 text-center font-semibold rounded-lg p-2`}
                                                >
                                                    <p className="text-base sm:text-lg">{weekday}</p>
                                                    <p className="text-2xl sm:text-3xl">{day}</p>
                                                </div>

                                                <div className="border-l-2 border-gray-300 min-h-[83px] sm:h-full mx-4 hidden md:block"></div>

                                                <div className="flex-grow space-y-2 lg:py-4">
                                                    <div className="flex items-center space-x-2">
                                                        <FaClock
                                                            className="text-gray-500"
                                                            size={14}
                                                        />
                                                        <p className="text-sm text-gray-800">
                                                            {dateDetails.statTime} -{" "}
                                                            {dateDetails.endTime}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <FaUsers
                                                            className="text-gray-500"
                                                            size={14}
                                                        />
                                                        <p className="text-sm text-gray-600">
                                                            Slot Available:{" "}
                                                            <span
                                                                className={`font-semibold ${dateDetails.slots > 3
                                                                    ? "text-green-500"
                                                                    : dateDetails.slots > 0 ? "text-orange-500" :"text-Red-500"
                                                                    }`}
                                                            >
                                                                {dateDetails.slots}
                                                            </span>
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className="w-full sm:w-auto items-center flex">
                                                    <button
                                                        onClick={() =>
                                                            handlePayment(dateDetails)
                                                        }
                                                        disabled={dateDetails.slots < 1}
                                                        className={`w-full sm:w-auto px-3 py-2 rounded-full lg:me-5 text-white font-semibold ${dateDetails.slots === 0
                                                            ? "bg-gray-300 cursor-not-allowed"
                                                            : "bg-blue-500 hover:bg-blue-600"
                                                            }`}
                                                    >Book
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                ) : (
                    <p className="text-red-500">Error: Course not found!</p>
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
