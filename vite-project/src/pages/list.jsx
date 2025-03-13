import React from 'react'
import ListIcon from '../assets/list-icon.jpg'

const List = () => {
  return (
    <>
    <div className="p-6 h-16 border-b border-gray-200">
      <h1 className="flex justify-start font-medium text-xl">My lists</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <div className="mb-4">
          <img
            src={ListIcon} // Replace with actual icon
            alt="Lists Icon"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Welcome to your lists
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Lists help you organize your prospects and start targeted campaigns.
          Pick a template below to get started
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">
            <span className="mr-2">👤</span> Create a people list
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">
            <span className="mr-2">🏢</span> Create a company list
          </button>
        </div>
        <p className="text-blue-500 mt-4 cursor-pointer hover:underline">
          Learn more about lists
        </p>
      </div>
    </div>
    </>
  )
}

export default List