import React from "react";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Weather from "./pages/Weather";
import Temperature from "./pages/Temperature";
import Notepad from "./pages/Notepad";

const App = () => {
  
  return (
    <div className="flex min-h-screen w-screen flex-col bg-white font-manrope">
      <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/notepad" element={<Notepad />} />
      </Routes>
    </div>
  );
};

export default App;
