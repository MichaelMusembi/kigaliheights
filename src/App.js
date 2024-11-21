import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for navigation */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;