import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content - Reduced Padding */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        } flex-1 `}  // Reduced padding from 6 to 2
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
