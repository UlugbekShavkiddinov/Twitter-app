import logo from './logo.svg';
import './App.css';

import React from 'react';
import { ThemeContext } from './context/theme';
import { Routes, Route, Navigate } from 'react-router-dom';






// pages 
import Home from './pages/home/home';
import Login from './pages/logIn/login';
import Signin from './pages/signin/singnin'
import Profile from './pages/profile/profile';
import MainProfile from './pages/mainProfile/mainProfile';


function Authenticated() {
    const { theme } = React.useContext(ThemeContext)

    return (
        <div id="container" className={theme === 'light' ? 'light' : 'dark'}>
            <Routes>
                <Route path='' element={<Navigate to='/login' />} />
                <Route path='/login/*' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/:id' element={<Profile />} />
            </Routes>


        </div>
    );
}

export default Authenticated;
