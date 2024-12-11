import api from './api';

export const getAllClasses = async (limit:number, currentPage:number, query:any) => {
  try {
    const response = await api.get(`/classes`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    throw error;
  }
};