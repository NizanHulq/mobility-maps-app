import "./App.scss";
import Retail from "./components/pages/retail";
import Education from "./components/pages/education";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import React, { Component } from "react";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Retail />} />
          <Route path="/education" element={<Education />} />
        </Route>
        {/* <Route path="/" element={<Retail />} /> */}
      </Routes>
    </div>
  );
};

export default App;
