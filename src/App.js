import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <BrouserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Router path="/Profile" element={<Profile />} />
            <Router path="/Messages" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrouserRouter>
  )
}
export default App;