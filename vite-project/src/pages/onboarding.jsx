import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icon for dropdown

const Onboarding = ({ sidebarOpen }) => {
  const [activeTab, setActiveTab] = useState("queue");

  // Manage dropdown visibility for each item
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Sample Task Data
  const tasks = [
    { title: "Find & save ideal leads", credits: 5, description: "Save contacts from a 265M+ database." },
    { title: "Link your mailbox", credits: 10, description: "Centralize email tracking and automation." },
    { title: "Customize sales content", credits: 5, description: "Create personalized email templates." },
    { title: "Create a sequence", credits: 10, description: "Optimize outbound campaigns." },
    { title: "Add contacts to sequence", credits: 10, description: "Target the right audience effectively." },
  ];

  return (
    <div className="relative flex w-full">
      {/* Background Container (Behind Sidebar) */}
      <div className="absolute inset-0 bg-gray-100 min-h-screen max-w-full z-0"></div>

      {/* Onboarding Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        } w-full flex justify-center relative z-10`}
      >
        <div className="w-full max-w-5xl">
          {/* Top Bar with Buttons */}
          <div className="grid justify-between items-center bg-white shadow p-4 rounded-lg m-6">
            <h2 className="text-2xl font-bold mb-4">Onboarding Hub</h2>
            <div className="space-x-4">
              <Button
                variant={activeTab === "queue" ? "default" : "outline"}
                onClick={() => setActiveTab("queue")}
              >
                Your Queue
              </Button>
              <Button
                variant={activeTab === "explore" ? "default" : "outline"}
                onClick={() => setActiveTab("explore")}
              >
                Explore Apollo
              </Button>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="mt-4 bg-white p-6 rounded-lg shadow m-6">
            {activeTab === "queue" && (
              <>
                <h3 className="text-lg font-semibold">Recommended Setup</h3>
                <p className="mt-1 text-gray-600">
                  Get started with these tasks to optimize your workflow.
                </p>

                <ul className="mt-4 space-y-4">
                  {tasks.map((task, index) => (
                    <li
                      key={index}
                      className="border rounded-lg p-3 flex flex-col bg-gray-50 shadow"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{task.title}</span>
                        <div className="flex items-center gap-4">
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                            Earn {task.credits} credits
                          </span>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {openDropdown === index ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Dropdown Content */}
                      {openDropdown === index && (
                        <div className="mt-2 p-3 bg-white border rounded-lg shadow-md transition-all">
                          <p className="text-gray-700">{task.description}</p>
                          <Button className="mt-2">Start Task</Button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {activeTab === "explore" && (
              <>
                <h3 className="text-lg font-semibold">Explore Apollo</h3>
                <p className="mt-1 text-gray-600">
                  Learn how Apollo can enhance your workflow.
                </p>
                <Link to="/explore" className="text-blue-600 mt-3 inline-block">
                  Learn More →
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
