import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import ClassCalendar from './components/calendar';
import TermsCondition from './pages/termAndConditions';
import Assecibilty from './pages/assecibilty';
import CourseOne from './pages/courses/courseOne';
import CourseTwo from './pages/courses/courseTwo';


function App() {
  const router = createBrowserRouter(
    [
      {path: "/", element: <Home />},
      { path: "/calendar", element: <ClassCalendar /> },
      {path: "/terms", element: <TermsCondition />},
      {path: "/assecibilty", element: <Assecibilty />},
      {path: "/intro_to_technical_analysis_and_understanding", element: <CourseOne/>},
      {path: "/in_depth_technical_analysis_training", element: <CourseTwo/>}


    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
