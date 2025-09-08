import React from "react";

const dashboardStats = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M9 11V7a3 3 0 016 0v4" />
      </svg>
    ),
    title: "2,847",
    subtitle: "Total Bookings",
    change: "+12%",
    link: "#",
    changeColor: "text-green-400",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "$458,920",
    subtitle: "Revenue",
    change: "+18%",
    link: "#",
    changeColor: "text-green-400",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-3-3.87" />
        <path d="M9 21v-2a4 4 0 013-3.87" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "8,432",
    subtitle: "Active Users",
    change: "+5%",
    link: "#",
    changeColor: "text-green-400",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M10 20v-6h4v6m1-10a7 7 0 11-8 0" />
      </svg>
    ),
    title: "127",
    subtitle: "Experiences",
    change: "+3%",
    link: "#",
    changeColor: "text-green-400",
  },
];

const modules = [
  {
    bgColor: "bg-blue-500",
    title: "Analytics Dashboard",
    description: "View comprehensive analytics and reports",
    icon: (
      <svg
        className="w-8 h-8 text-blue-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17v-6M13 17v-10M8 17v-2" />
      </svg>
    ),
    link: "/admin/analytics",
  },
  {
    bgColor: "bg-green-500",
    title: "B2B Booking System",
    description: "Manage partner bookings and group reservations",
    icon: (
      <svg
        className="w-8 h-8 text-green-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-3-3.87M9 21v-2a4 4 0 013-3.87" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    link: "/admin/b2b-booking",
  },
  {
    bgColor: "bg-purple-600",
    title: "CRM & Email Campaigns",
    description: "Customer relationship management and marketing",
    icon: (
      <svg
        className="w-8 h-8 text-purple-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 12v-1a4 4 0 00-8 0v1" />
        <rect x="8" y="12" width="8" height="8" rx="3" />
        <path d="M12 20v2M16 22h-8" />
      </svg>
    ),
    link: "/admin/crm-email",
  },
  {
    bgColor: "bg-indigo-600",
    title: "Content Management",
    description: "Manage website content, media, and experiences",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <path d="M3 10h18" />
      </svg>
    ),
    link: "/admin/content",
  },
  {
    bgColor: "bg-cyan-600",
    title: "Booking Management",
    description: "View and manage customer bookings",
    icon: (
      <svg
        className="w-8 h-8 text-cyan-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
      </svg>
    ),
    link: "/admin/booking",
  },
  {
    bgColor: "bg-orange-500",
    title: "User Management",
    description: "Manage system users and permissions",
    icon: (
      <svg
        className="w-8 h-8 text-orange-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a7 7 0 0113 0v2" />
      </svg>
    ),
    link: "/admin/user-management",
  },
  {
    bgColor: "bg-gray-700",
    title: "System Integration",
    description: "Manage third-party integrations and APIs",
    icon: (
      <svg
        className="w-8 h-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a6.97 6.97 0 000-6" />
        <path d="M4.6 9a6.97 6.97 0 000 6" />
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M16.95 7.05l-1.41 1.41" />
        <path d="M7.05 16.95l-1.41 1.41" />
      </svg>
    ),
    link: "/admin/system-integration",
  },
  {
    bgColor: "bg-red-600",
    title: "Security & Compliance",
    description: "Security settings and compliance monitoring",
    icon: (
      <svg
        className="w-8 h-8 text-red-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    link: "/admin/security-compliance",
  },
  {
    bgColor: "bg-pink-600",
    title: "Mobile PWA",
    description: "Progressive Web App management",
    icon: (
      <svg
        className="w-8 h-8 text-pink-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="7" y="7" width="10" height="10" rx="2" ry="2" />
        <path d="M12 2v3M12 19v3M5 12H2M22 12h-3" />
      </svg>
    ),
    link: "/admin/mobile-pwa",
  },
];

const accessLevels = [
  {
    label: "Analytics",
    granted: true,
  },
  {
    label: "User Management",
    granted: true,
  },
  {
    label: "All Bookings",
    granted: true,
  },
  {
    label: "Manage Experiences",
    granted: true,
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white font-sans">
      {/* Access Level */}
      <section className="mb-6 bg-gray-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Your Access Level</h2>
        <div className="flex flex-wrap gap-8">
          {accessLevels.map((level) => (
            <div
              key={level.label}
              className="flex items-center space-x-2 select-none"
            >
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  level.granted ? "bg-green-400" : "bg-gray-600"
                }`}
                aria-hidden="true"
              />
              <span>{level.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardStats.map(({ icon, title, subtitle, change, link, changeColor }, i) => (
          <div
            key={i}
            className="flex flex-col bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition shadow-md"
          >
            <div className="mb-4">{icon}</div>
            <div className="text-3xl font-extrabold">{title}</div>
            <div className="text-sm text-gray-300 mb-2">{subtitle}</div>
            <div className={`self-start text-xs font-semibold rounded-full px-2 py-0.5 ${changeColor} bg-green-900`}>
              {change}
            </div>
            <a
              href={link}
              className="text-xs mt-3 text-blue-400 underline"
              onClick={(e) => e.preventDefault()}
            >
              Click to view details
            </a>
          </div>
        ))}
      </section>

      {/* Modules */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Admin Modules</h3>
          <span className="text-sm text-gray-400">
            Click any module to access its features
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map(({ bgColor, title, description, icon, link }, i) => (
            <a
              key={i}
              href={link}
              className={`${bgColor} rounded-lg p-8 flex flex-col gap-3 cursor-pointer shadow-lg hover:shadow-xl transition select-none`}
              onClick={(e) => e.preventDefault()}
              title={title}
            >
              <div>{icon}</div>
              <h4 className="text-white font-semibold text-xl">{title}</h4>
              <p className="text-white text-base opacity-90">{description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
