import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getAllClasses } from '../services/classes';
import { gapi } from 'gapi-script';

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
  const addEventToGoogleCalendar = (cls: Class) => {
    const CLIENT_ID = '701095227141-0hvol8du75cd0qnbkgjsigpusoau6kh8.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyC-ehL5MIHKNcNHH2J_8kIkvI9tfTn9X_E';
    const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
  
    const startDate = new Date(`${cls.date}T${cls.startTime}`);
    const endDate = new Date(`${cls.date}T${cls.endTime}`);
  
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: SCOPES,
      }).then(() => {
        gapi.auth2.getAuthInstance().signIn().then(() => {
          gapi.client.load('calendar', 'v3').then(() => {
            const event: gapi.client.calendar.Event = {
              summary: cls.courseName,
              start: { dateTime: startDate.toISOString() },
              end: { dateTime: endDate.toISOString() },
            };
  
            gapi.client.calendar.events.insert({
              calendarId: 'primary',
              resource: event,
            }).then(() => {
              alert('Event added to Google Calendar');
            }).catch((error: any) => {
              console.error('Error adding event to calendar:', error);
            });
          });
        }).catch((error: any) => {
          console.error('Error signing in:', error);
        });
      }).catch((error: any) => {
        console.error('Error initializing gapi client:', error);
      });
    });
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
              <button  className='p-2 text-white bg-googleBlue-500' onClick={() => addEventToGoogleCalendar(selectedClass)}>Book Now</button>
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
