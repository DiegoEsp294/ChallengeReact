import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./Presentationals/Routing/NotFound";

function App() {
  //var token = localStorage.getItem('token');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
