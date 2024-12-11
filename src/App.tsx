import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import ClassCalendar from './components/calendar';

function App() {
  const router = createBrowserRouter(
    [
      {path: "/", element: <Home />},
      // { path: "/calendar", element: <ClassCalendar /> },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
