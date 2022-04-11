import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./Presentationals/Routing/NotFound";

function App() {
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
