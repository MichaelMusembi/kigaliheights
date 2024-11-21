import React from "react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Bookings", icon: "📅" },
    { name: "Guests", icon: "👤" },
    { name: "Rooms", icon: "🛏️" },
    { name: "Billing", icon: "💳" },
    { name: "Reports", icon: "📊" },
  ];

  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col h-screen shadow-md">
      {/* App Title */}
      <h1 className="text-2xl font-bold p-6 border-b border-blue-500">
        Nile PMS
      </h1>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 hover:bg-blue-500 cursor-pointer transition-colors duration-300"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-lg font-medium">{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-blue-500">
        <p className="text-sm">© 2024 Nile Residences</p>
      </div>
    </div>
  );
};

export default Sidebar;
