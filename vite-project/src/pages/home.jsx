import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu,SlidersHorizontal,Ellipsis } from "lucide-react"; // Sidebar Toggle Icon
import { Checkbox } from "@/components/ui/checkbox";

const Home = ({ sidebarOpen, toggleSidebar }) => {
  const userName = "Ashburn"; // Replace with dynamic user data if available

  return (
    <div className="relative flex w-full">
      {/* Background (Behind Sidebar & Top Bar) */}
      <div className="absolute inset-0 bg-gray-100 min-h-screen max-w-full z-0"></div>

      {/* Content Section (Moves with Sidebar) */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-16"
        } w-full relative z-10`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center bg-white shadow p-4 rounded-lg m-6">
          {/* Sidebar Toggle Button */}
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 lg:hidden">
            <Menu size={24} />
          </button>

          {/* Greeting Text */}
          <h2 className="text-2xl font-bold">Hey, {userName}!</h2>

          {/* Right-Side Buttons */}
          <div className="space-x-4">
            <Button variant="outline">Profile</Button>
            <Button className="bg-green-500" >Settings</Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-4 bg-white p-6 rounded-lg shadow m-6">
          <h3 className="text-lg font-semibold">Welcome to Your Dashboard</h3>
          <p className="mt-1 text-gray-600">Manage your tasks, sequences, and reports efficiently.</p>

          {/* Quick Actions */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-medium">Quick Actions</h4>
            <div className="flex space-x-4 mt-2">
              <Button className="bg-blue-400">View Reports</Button>
              <Button variant="outline">Create New Task</Button>
            </div>
          </div>
        </div>
        {/* recommeneded prospect */}
        <div className=" mt-6 p-4 bg-white rounded-lg shadow m-6" >
          <h3 className="text-lg font-semibold text-left ">Recommended prospects</h3>
          <p className="text-left text-gray-500">Discover new high-value leads that are similar to past prospects or fit your target persona.</p>
          {/* Container */}
          <div className="container mx-auto my-3 p-6 border border-gray-500 rounded-lg h-64 relative">
            {/* Checkbox */}
            <div className="absolute top-4 left-4">
              <Checkbox />
            </div>
            {/* Separator */}
            <div className="mt-8 border-b border-gray-400"></div>
            {/* Centered Text */}
            <div className="flex h-full items-center justify-center text-center flex-col">
              <h4 className="font-semibold text-lg ">
                No prospect recommendations right now
              </h4>
              <p className="text-gray-500 text-sm mt-2">We recommend up to 20 prospects daily, so please check back tomorrow for new recommendations.</p>
            </div>
          </div>
        </div>

        {/* Three Row-wise  */}
        <div className="grid grid-cols-3 gap-6 px-6">
          {/* Card 1 - Email Performance Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Email Performance Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Track and analyze email performance metrics in real-time.</p>
            </CardContent>
          </Card>

          {/* Card 2 - Mailbox */}
          <Card>
            <CardHeader>
              <CardTitle>Mailbox</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Manage your emails and communication from one place.</p>
            </CardContent>
          </Card>

          {/* Card 3 - Mailbox */}
          <Card>
            <CardHeader>
              <CardTitle>Mailbox</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Monitor and organize your incoming messages efficiently.</p>
            </CardContent>
          </Card>
        </div>

        {/* sequence report */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow m-6 h-64">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Sequence performance</h4>
        <div className="flex space-x-3">
          <SlidersHorizontal className=" text-gray-600 cursor-pointer" />
          <Ellipsis className="text-gray-600 cursor-pointer" />
        </div>
      </div>
      <p className="text-gray-500 text-left">Last 90 days</p>
      <p className="text-gray-500 text-left">No data is available for this combination of metrics, filters and dimensions.</p>
    </div>

    {/* leaderboard */}

    <div className="grid grid-cols-2  ">
    <div className="mt-6 p-4 bg-white rounded-lg shadow m-6 h-96">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Leaderboard: Emails sent</h4>
        <div className="flex space-x-3">
          <SlidersHorizontal className=" text-gray-600 cursor-pointer" />
          <Ellipsis className="text-gray-600 cursor-pointer" />
        </div>
      </div>
      <p className="text-gray-500 text-left">Last 30 days</p>
      <p className="text-gray-500 text-left">No data is available for this combination of metrics, filters and dimensions.</p>
    </div>
    <div className="mt-6 p-4 bg-white rounded-lg shadow m-6 h-96">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Leaderboard: Calls completed</h4>
        <div className="flex space-x-3">
          <SlidersHorizontal className=" text-gray-600 cursor-pointer" />
          <Ellipsis className="text-gray-600 cursor-pointer" />
        </div>
      </div>
      <p className="text-gray-500 text-left">Last 30 days</p>
      <p className="text-gray-500 text-left">No data is available for this combination of metrics, filters and dimensions.</p>
    </div>

    </div>

      </div>
    </div>
  );
};

export default Home;
