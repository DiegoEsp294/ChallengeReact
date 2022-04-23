import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./Presentationals/Routing/NotFound";
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  let navigate = useNavigate();
  let token = localStorage.getItem('token');

  const handleToLogin = (token) => {
    if(!token){
      navigate('login');
    }
  }

  useEffect(() => {
    handleToLogin(token);
  },[token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home handleToLogin={handleToLogin}/>} />
        <Route path="/login" element={<Login handleToLogin={handleToLogin}/>} />
        <Route path="/*" element={<NotFound handleToLogin={handleToLogin}/>} />
      </Routes>
    </div>
  );
}

export default App;
