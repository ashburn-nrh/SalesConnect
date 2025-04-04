import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChartBar, FaCog } from "react-icons/fa";
import { CiPaperplane, CiChat1, CiHome, CiUser, CiCalendarDate, CiDatabase, CiBoxList, CiHospital1, CiMail, CiPhone, CiBadgeDollar } from "react-icons/ci";
import { MdOutlineTaskAlt } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import "primeicons/primeicons.css";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navigate = useNavigate();
  {/*useLocation is a hook provided by React Router that allows functional components to access the current location object.*/}
  const location = useLocation();

  const handleItemClick = (route) => {
    navigate(route);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-white to-emerald-100 text-black p-5 flex flex-col transition-all duration-300 shadow-md outline outline-gray-400 
      ${isCollapsed ? "w-16" : "w-64"}`}
    >
      {/* Toggle Sidebar */}
      <button className="text-black mb-5" onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>

      {/* Menu Items */}
      <ul className="space-y-4 flex flex-col flex-grow">
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer
        {/* Highlight the current page if the locationpathname is home then the icon will be grey  */} 
          ${location.pathname === "/home" && "bg-gray-200"}
          `} onClick={() => handleItemClick("/home")}>
          <CiHome size={22} /> {!isCollapsed && <span>Home</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer
          ${location.pathname === "/People" && "bg-gray-200"}`} onClick={() => handleItemClick("/People")
        }>
          <CiUser size={22} /> {!isCollapsed && <span>People</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer
          ${location.pathname === "/companies" && "bg-gray-200"}`} onClick={() => handleItemClick("/Companies")
        }>


          <CiHospital1 size={22} /> {!isCollapsed && <span>Companies</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer
          ${location.pathname === "/Lists" && "bg-gray-200"}`} onClick={() => handleItemClick("/Lists")
        }>


          <CiBoxList size={22} /> {!isCollapsed && <span>Lists</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer ${
          location.pathname === "/Dataenrichment" && "bg-gray-200"
          }`} onClick={()=> handleItemClick("/Dataenrichment")}>
          <CiDatabase size={22} /> {!isCollapsed && <span>Data Enrichment</span>}
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <CiPaperplane size={22} /> {!isCollapsed && <span>Sequences</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer ${location.pathname === "/email" && "bg-gray-200"}`} onClick={()=> handleItemClick("/email")}>
          <CiMail size={22} /> {!isCollapsed && <span>Emails</span>}
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <CiPhone size={22} /> {!isCollapsed && <span>Calls</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer ${location.pathname === "/meetings" && "bg-gray-200"}`} onClick={()=> handleItemClick("/meetings")}>
          <CiCalendarDate size={22} /> {!isCollapsed && <span>Meetings</span>}
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <CiChat1 size={22} /> {!isCollapsed && <span>Conversations</span>}
        </li>
        <li className={`flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer ${location.pathname === "/deals" && "bg-gray-200"}`} onClick={()=> handleItemClick("/deals")}>
          <CiBadgeDollar size={22} /> {!isCollapsed && <span>Deals</span>}
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <MdOutlineTaskAlt size={22} /> {!isCollapsed && <span>Tasks</span>}
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <AiOutlineThunderbolt size={22} /> {!isCollapsed && <span>Workflows</span>}
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <FaChartBar size={22} /> {!isCollapsed && <span>Analytics</span>}
        </li>
      </ul>

      {/* Admin Settings at Bottom */}
      <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg px-2 py-1 cursor-pointer  mt-auto">
        <FaCog size={22} className="pi pi-spin pi-cog" /> {!isCollapsed && <span>Admin Settings</span>}
      </li>
    </div>
  );
};

export default Sidebar;
