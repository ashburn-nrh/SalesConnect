import Filter from '@/components/filter'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { ChevronDown, X, Search, Settings, SlidersHorizontal } from 'lucide-react';
  import { useState } from 'react';
  

const Companies = () => {
    const [showFilters, setShowFilters] = useState(true);
  return (<>
    <div className="grid grid-cols-2 items-center bg-white shadow p-6 h-16">
      <h2 className="flex justify-start font-medium text-xl">Companies</h2>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-4 ">Run AI prompt</button>
        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center border border-black px-4 py-2 rounded-lg">
      Import
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
    </DropdownMenuTrigger>
    
            <DropdownMenuContent>
            <DropdownMenuItem>Single contact</DropdownMenuItem>
            <DropdownMenuItem>CSV</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    
      </div>
    </div>
    {/*second section*/}
        <div className="w-full border-t border-b border-gray-200 p-2 flex items-center gap-2 bg-white">
          {/* Default view dropdown */}
          <div className="flex items-center border rounded px-2 py-1.5 text-sm font-medium text-gray-700 bg-white">
            <span className="grid place-items-center mr-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
                <line x1="9" y1="21" x2="9" y2="9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            Default view
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
    
          {/* Toggle filters button */}
          <button 
            className="flex items-center border rounded px-3 py-1.5 text-sm font-medium text-gray-700 bg-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-1" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
    
          {/* Search input */}
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded text-sm bg-gray-50"
              placeholder="Search"
            />
          </div>
    
          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center bg-gray-100 border border-gray-300 rounded px-3 py-1.5 text-sm font-medium">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V4L7 14H11V20L17 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Create workflow
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
    
            <button className="flex items-center border border-gray-300 rounded px-3 py-1.5 text-sm font-medium">
              Save as new search
            </button>
    
            <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 text-sm font-medium">
              <span className="mr-1">Relevance</span>
              <ChevronDown className="w-4 h-4" />
            </div>
    
            <button className="p-1.5 border border-gray-300 rounded text-gray-600">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
    
        <Filter />
        </>
  )
}

export default Companies