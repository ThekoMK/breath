import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './react/containers/Signup/SignUp';
import HomePage from './components/HomePage';
import Login from './react/containers/Signup/Login';
import Profile from './react/containers/Profile/Profile';
import Header from './react/components/Header';
import CurvedMenu from './react/components/CurvedMenu';
import Menu from './react/components/Menu';
import MyReports from './react/containers/Profile/MyReports';
import AboutUs from './react/components/AboutUs';
import ReportFrom2 from './components/ReportFrom2';
import PollutionReport from './react/components/PollutionReport';
import MainMenu from './react/components/MainMenu';
import { LocationProvider } from './react/context/LocationContext';
import PickYourLocation from './react/components/PickYourLocation';

function App() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, [window.location.pathname]);

  return <div className='min-w-screen min-h-screen mt-20'>
    <BrowserRouter>
      <LocationProvider >
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pickLocation" element={<PickYourLocation />} />
        <Route path="/report" element={<ReportFrom2 />} />
        <Route path="/pollutionReport" element={<PollutionReport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myreports" element={<MyReports/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <MainMenu/>
      </LocationProvider>
    </BrowserRouter>
  </div>
}

export default App;
