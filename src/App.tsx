import React from 'react'
import './App.css';
import LogInPage from './pages/authPage/LogInPage.tsx';
import SignUpPage from './pages/authPage/SignUpPage.tsx';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Registration-box-container'>
          <Routes>
            <Route path={'/'} element={<LogInPage/>} />
            <Route path={'/SignUpPage'} element={<SignUpPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
