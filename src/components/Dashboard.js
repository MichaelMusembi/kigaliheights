import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-3">
            <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300">
              🔔
            </button>
            <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300">
              👤
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Occupancy Rate", value: "80%", color: "bg-green-100" },
          { title: "Revenue", value: "$12,000", color: "bg-yellow-100" },
          { title: "Bookings", value: "25", color: "bg-blue-100" },
          { title: "Maintenance Requests", value: "3", color: "bg-red-100" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${stat.color} text-center`}
          >
            <h2 className="text-xl font-semibold text-gray-700">{stat.title}</h2>
            <p className="text-3xl font-bold mt-2 text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Calendar Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Booking Calendar</h2>
        <div className="text-gray-400 text-center py-10">
          <p>Calendar View Here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
