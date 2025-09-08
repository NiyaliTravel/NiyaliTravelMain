import React from "react";

const stats = [
  {
    key: "Total Bookings",
    value: "2,847",
    change: "+12%",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 7h18M3 12h18M3 17h18"></path>
      </svg>
    )
  },
  {
    key: "Revenue",
    value: "$458,920",
    change: "+18%",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 8c-1.104 0-2 .896-2 2 0 1.104.896 2 2 2"></path>
        <path d="M12 12v4"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    )
  },
  {
    key: "Active Users",
    value: "8,432",
    change: "+5%",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M5.5 20a6.5 6.5 0 0113 0"></path>
      </svg>
    )
  },
  {
    key: "Experiences",
    value: "127",
    change: "+3%",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3v18"></path>
        <path d="M3 12h18"></path>
      </svg>
    )
  }
];

const modules = [
  {
    title: "Analytics Dashboard",
    description: "View comprehensive analytics and reports",
    color: "bg-blue-500",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3v18h18"></path>
        <path d="M9 14l2-2 4 4"></path>
      </svg>
    )
  },
  {
    title: "B2B Booking System",
    description: "Manage partner bookings and group reservations",
    color: "bg-green-500",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 12 12 12z"></path>
        <path d="M7 17h10"></path>
      </svg>
    )
  },
  {
    title: "CRM & Email Campaigns",
    description: "Customer relationship management and marketing",
    color: "bg-purple-600",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"></path>
        <rect width={18} height={12} x={3} y={6} rx={2} ry={2}></rect>
      </svg>
    )
  },
  {
    title: "Content Management",
    description: "Manage website content, media, and experiences",
    color: "bg-indigo-600",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 20h9"></path>
        <path d="M12 4h9"></path>
        <path d="M3 9h7"></path>
        <path d="M3 15h7"></path>
      </svg>
    )
  },
  {
    title: "Booking Management",
    description: "View and manage customer bookings",
    color: "bg-cyan-600",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={16} height={12} x={4} y={6} rx={2} ry={2}></rect>
        <path d="M4 10h16"></path>
      </svg>
    )
  },
  {
    title: "User Management",
    description: "Manage system users and permissions",
    color: "bg-orange-600",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M5.5 20a6.5 6.5 0 0113 0"></path>
      </svg>
    )
  },
  {
    title: "System Integration",
    description: "Manage third-party integrations and APIs",
    color: "bg-gray-700",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3v18"></path>
        <path d="M3 12h18"></path>
      </svg>
    )
  },
  {
    title: "Security & Compliance",
    description: "Security settings and compliance monitoring",
    color: "bg-red-600",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    )
  },
  {
    title: "Mobile PWA",
    description: "Progressive Web App management",
    color: "bg-pink-600",
    icon: (
      <svg
        className="w-8 h-8 text-white opacity-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={14} height={18} x={5} y={3} rx={2} ry={2}></rect>
        <path d="M12 7v4"></path>
        <path d="M9 11h6"></path>
      </svg>
    )
  }
];

const AdminDashboard = () => {
  return (
    <div className="px-6 py-8 bg-gray-900 min-h-screen text-white font-sans">
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Your Access Level</h2>
        <div className="flex space-x-8 mb-8">
          <div className="flex items-center space-x-2 text-green-400 font-medium">
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span>Analytics</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400 font-medium">
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span>User Management</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400 font-medium">
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span>All Bookings</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400 font-medium">
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span>Manage Experiences</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map(({ key, value, change, icon }) => (
            <div
              key={key}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-start space-y-2 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-600 rounded-md">{icon}</div>
                <h3 className="text-lg font-bold">{value}</h3>
              </div>
              <p className="text-sm text-gray-400">{key}</p>
              <span className="text-xs text-green-400 font-semibold">{change}</span>
              <a className="text-indigo-400 text-xs underline cursor-pointer" href="#">
                Click to view details
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Admin Modules</h2>
          <p className="text-sm text-gray-400">Click any module to access its features</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map(({ title, description, color, icon }) => (
            <button
              key={title}
              type="button"
              className={`${color} rounded-lg p-6 flex flex-col space-y-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500`}
              aria-label={`Access ${title}`}
              onClick={() => alert(`Navigating to ${title}`)}
            >
              <div>{icon}</div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-white opacity-90">{description}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
