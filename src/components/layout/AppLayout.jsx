import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import React from "react";


const AppLayout = () => {
  return (
    <div
      // style={{
      //   padding: "50px 0 0 370px",
      // }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
