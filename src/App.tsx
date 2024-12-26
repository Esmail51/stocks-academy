import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Home from './pages/home';
import ClassCalendar from './components/calendar';
import TermsCondition from './pages/termAndConditions';
import Assecibilty from './pages/assecibilty';
import LoginMain from './components/login/loginMain';
import CourseOne from './pages/courses/courseOne';
import CourseTwo from './pages/courses/courseTwo';
import CourseThree from './pages/courses/courseThree';
import MembershipPage from './pages/membershipPage';
import ContactForm from './pages/contact';
import Courses from './components/home/courses';
import Register from './components/login/register';
import StripeProvider from './providers/StripeProvider';
import PaymentForm from './components/stripeForm';

const MainLayout = () => (
  <div>
    {/* we can include header here */}
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const NoFooterLayout = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

const router = createBrowserRouter([
  // Routes with MainLayout
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/calendar", element: <ClassCalendar /> },
      { path: "/terms", element: <TermsCondition /> },
      { path: "/assecibilty", element: <Assecibilty /> },
      { path: "/intro_to_technical_analysis_and_understanding", element: <CourseOne /> },
      { path: "/in_depth_technical_analysis_training", element: <CourseTwo /> },
      { path: "/an_introduction_to_options_trading", element: <CourseThree /> },
      { path: "/choose_plan", element: <MembershipPage /> },
      { path: "/courses", element: <Courses /> },
      { path: "/contact", element: <ContactForm /> },
    ],
  },
  // Routes with NoFooterLayout
  {
    element: <NoFooterLayout />,
    children: [
      { path: "/login", element: <LoginMain /> },
      { path: "/register", element: <Register /> },
      { path: "/stripe", element: <PaymentForm/> },
    ],
  },
]);

function App() {
  return(
    <StripeProvider>
   <RouterProvider router={router} />
   </StripeProvider>
  )
}

export default App;
