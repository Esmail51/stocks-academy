import axios from 'axios';
import api from './api';


export const getAllClasses = async (limit:number, currentPage:number, query:any) => {
  try {
    const response = await api.get(`/classes?${query}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    throw error;
  }
};



export const createClass = async (payload: any) => {
  try {
    const response = await api.post('/bookings', payload);
    return response.data;
  } catch (error) {
    console.error('Failed to create class:', error);
    throw error;
  }
};