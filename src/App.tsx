import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Home from './pages/home';
import ClassCalendar from './components/calendar';
import TermsCondition from './pages/termAndConditions';
import Assecibilty from './pages/assecibilty';
// import LoginMain from './components/login/loginMain';
import CourseOne from './pages/courses/courseOne';
import CourseTwo from './pages/courses/courseTwo';
import CourseThree from './pages/courses/courseThree';
import MembershipPage from './pages/membershipPage';
import ContactForm from './pages/contact';
import Courses from './components/home/courses';
import Register from './components/login/register';
import StripeProvider from './providers/StripeProvider';
import PaymentForm from './components/stripeForm';
import Header from './components/header';
import LoginMain from './components/login/loginMain';

const MainLayout = ({ onLoginOpen }: { onLoginOpen: () => void }) => (
  <div>
    <Header onLoginOpen={onLoginOpen} />
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



const App = () => {
  const [loginShow, setLoginShow] = useState(false);

  // Function to open the Login Modal
  const handleLoginOpen = () => {
    setLoginShow(true);
  };

  // Function to close the Login Modal
  const handleLoginClose = () => {
    setLoginShow(false);
  };
  const router = createBrowserRouter([
    // Routes with MainLayout
    {
      element: <MainLayout onLoginOpen={handleLoginOpen} />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/calendar", element: <ClassCalendar /> },
        { path: "/terms", element: <TermsCondition /> },
        { path: "/assecibilty", element: <Assecibilty /> },
        { path: "/intro_to_technical_analysis_and_understanding", element: <CourseOne onLoginOpen={handleLoginOpen} /> },
        { path: "/in_depth_technical_analysis_training", element: <CourseTwo onLoginOpen={handleLoginOpen} /> },
        { path: "/an_introduction_to_options_trading", element: <CourseThree onLoginOpen={handleLoginOpen} /> },
        { path: "/choose_plan", element: <MembershipPage /> },
        { path: "/courses", element: <Courses /> },
        { path: "/contact", element: <ContactForm /> },
      ],
    },
    // Routes with NoFooterLayout
    {
      element: <NoFooterLayout />,
      children: [
        // { path: "/login", element: <LoginMain /> },
        { path: "/register", element: <Register /> },
        { path: "/stripe", element: <PaymentForm /> },
      ],
    },
  ]);

  return (

    <StripeProvider>
        <LoginMain show={loginShow} onClose={handleLoginClose} />
     
      <RouterProvider router={router} />
    </StripeProvider>

  )
}

export default App;
