import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ForgetPassword from './Pages/ForgetPassword';
import Resetpassword from './Pages/Resetpassword';
import Urlshortner from './Pages/Urlshortner';
import ActivationPage from './Pages/ActivationPage';
import UrlDashboard from './Pages/UrlDashboard';
import Urltotalcount from './Pages/Urltotalcount';

const App = () => {
    return (
        <div>
           <BrowserRouter>
           <Routes>
            <Route path='/' element={<RegisterPage/>}/>
            <Route path='/activateaccount' element={<ActivationPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/forgotpassword' element={<ForgetPassword/>}/>
            <Route path='/reset-pswrd/:id/:token' element={<Resetpassword/>}/>
            <Route path='/urlshortner' element={<Urlshortner/>}/>
            <Route path='/urldashboard' element={<UrlDashboard/>}/>
            <Route path='/urltotalcount' element={<Urltotalcount/>}/>
           </Routes>
           </BrowserRouter>
        </div>
    );
};

export default App;