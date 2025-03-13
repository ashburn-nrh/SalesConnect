import { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";

const Filter = ({ isOpen, toggleFilter }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div
      className={` relative left-80 top-0 h-screen w-80 bg-white shadow-lg p-4 border transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button onClick={toggleFilter}>
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Filter Sections */}
      {[
        "Lists",
        "Persona",
        "Email Status",
        "Job Titles",
        "Company",
        "Location",
        "# Employees",
        "Industry & Keywords",
      ].map((section) => (
        <div key={section} className="border-b py-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(section)}
          >
            <span className="font-medium">{section}</span>
            {openSections[section] ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openSections[section] && (
            <div className="mt-2">
              <select className="w-full border rounded p-2">
                <option>Select {section}...</option>
              </select>
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <div className="mt-4 flex justify-between">
        <button className="text-gray-400">Clear Filters</button>
        <button className="bg-gray-200 px-3 py-1 rounded">More Filters</button>
      </div>
    </div>
  );
};

export default Filter;
