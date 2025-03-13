import React from "react";
import { Link } from "react-router-dom";

const queue = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Your Queue</h2>
        <p className="mt-2 text-gray-600">Here are your pending onboarding tasks.</p>

        <ul className="mt-4 space-y-4">
          {["Task 1", "Task 2", "Task 3"].map((task, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded-lg shadow">
              {task}
            </li>
          ))}
        </ul>

        {/* Navigation Link */}
        <div className="mt-6">
          <Link to="/explore" className="text-blue-600 underline">
            Go to Explore Apollo →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default queue;
