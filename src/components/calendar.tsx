import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import { getAllClasses } from '../services/classes';

interface Class {
  _id: string;
  courseName: string;
  date: string;
  startTime: string;
  endTime: string;
  availableSeats: number;
  maxSeats: number;
  type: string;
}

const localizer = momentLocalizer(moment);

const ClassCalendar: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
        try {
          const classes = await getAllClasses(10, 1, {});
          console.log('Classes:', classes);
          
          setClasses(classes);
        } catch (error) {
          console.error('Failed to fetch classes:', error);
        }
      };
  
      fetchClasses();
  }, []);

  const events = classes.map((cls) => (
    console.log('Start:', cls.date),
    {
    title: `${cls.courseName} (${cls.availableSeats}/${cls.maxSeats})`,
    start: new Date(cls.date),
    end: new Date(new Date(cls.date).setHours(parseInt(cls.endTime.split(':')[0]), parseInt(cls.endTime.split(':')[1]))),
    classDetails: cls,
  }));

  const handleSelectEvent = (event: any) => {
    setSelectedClass(event.classDetails);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

  return (
    <div>
      <h1>Class Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />

      {selectedClass && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedClass.courseName}</h2>
            <p>
              Time: {selectedClass.startTime} - {selectedClass.endTime}
            </p>
            <p>
              Available Seats: {selectedClass.availableSeats}/{selectedClass.maxSeats}
            </p>
            {selectedClass.availableSeats > 0 ? (
              <button onClick={() => console.log(`Booking class: ${selectedClass._id}`)}>Book Now</button>
            ) : (
              <p>Fully Booked</p>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassCalendar;
