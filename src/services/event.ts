import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get('accessToken');

const api = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://www.googleapis.com/calendar/v3/calendars/primary',
    headers: {
        Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  
  api.interceptors.response.use(
    response => response,
    error => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );
  
export const createEventInCalendar = async (payload: any) => {
    const CLIENT_ID = '701095227141-0hvol8du75cd0qnbkgjsigpusoau6kh8.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyC-ehL5MIHKNcNHH2J_8kIkvI9tfTn9X_E';
    const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
  
  
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: SCOPES,
      }).then(() => {
        if (accessToken) {
          gapi.client.setToken({ access_token: accessToken });
        }
          gapi.client.load('calendar', 'v3').then(() => {
            
            gapi.client.calendar.events.insert({
              calendarId: 'primary',
              resource: payload,
            }).then(() => {
              alert('Event added to Google Calendar');
            }).catch((error: any) => {
              console.error('Error adding event to calendar:', error);
            });
          });
      }).catch((error: any) => {
        console.error('Error initializing gapi client:', error);
      });
    });
  };