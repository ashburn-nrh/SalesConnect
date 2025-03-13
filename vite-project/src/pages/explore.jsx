import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Explore Apollo</h2>
        <p className="mt-2 text-gray-600">
          Learn how Apollo can help you find leads and optimize sales.
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Features:</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Find & save ideal leads</li>
            <li>Automate email sequences</li>
            <li>Analyze sales performance</li>
          </ul>
        </div>

        {/* Navigation Link */}
        <div className="mt-6">
          <Link to="/queue" className="text-blue-600 underline">
            Go to Your Queue →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
