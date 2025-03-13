import React, { useState } from 'react';
import { 
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, 
  DropdownMenuItem, DropdownMenuLabel 
} from '@/components/ui/dropdown-menu';

const DataEnrichment = () => {
  const [activeTab, setActiveTab] = useState("Data Health Center");

  return (
    <>
      {/* Navbar Section */}
      <div className='grid grid-cols-2 items-center bg-white p-6 h-16'>
        <h2 className='flex justify-start font-medium text-xl'>Data Enrichment</h2>
        <div className='flex justify-end'>
          <button className='bg-white text-black font-medium px-4 py-2 rounded-lg mx-4 border border-black'>
            View scheduled jobs
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center border border-black px-4 py-2 rounded-lg bg-green-200">
              Automate Enrichment
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="font-semibold text-gray-400 text-xs">Scheduled Enrichment</DropdownMenuLabel>
              <DropdownMenuItem>Schedule from scratch</DropdownMenuItem>
              <DropdownMenuItem>Schedule from templates</DropdownMenuItem>
              <div className='border-t border-gray-400'></div>

              <DropdownMenuLabel className="font-semibold text-gray-400 text-xs">Real-time Enrichment</DropdownMenuLabel>
              <DropdownMenuItem>Enable real-time enrichment</DropdownMenuItem>

              <div className='border-t border-gray-400'></div>
              <DropdownMenuItem>Learn about enrichment</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Tabs Section */}
      <div className='flex space-x-6 px-6 border-b border-gray-300'>
        {["Data Health Center", "CRM", "CSV", "Job Change Alerts"].map((tab) => (
          <button
            key={tab}
            className={`py-2 text-sm font-medium ${
              activeTab === tab ? "border-b-2 border-black text-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "CRM" ? (
              <span className="relative">
                {tab}
                <span className="ml-2 text-xs px-2 py-1 bg-green-200 text-green-700 rounded-full">
                  New
                </span>
              </span>
            ) : (
              tab
            )}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {activeTab === "Data Health Center" && <p>Content for Data Health Center</p>}
        {activeTab === "CRM" && <p>Content for CRM</p>}
        {activeTab === "CSV" && <p>Content for CSV</p>}
        {activeTab === "Job Change Alerts" && <p>Content for Job Change Alerts</p>}
      </div>
    </>
  );
};

export default DataEnrichment;
