import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
const FaNewspaper = require("react-icons/fa").FaNewspaper;
const FaSignOutAlt = require("react-icons/fa").FaSignOutAlt;
const FaBars = require("react-icons/fa").FaBars;

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState<{ name: string; photo: string } | null>(null);

  const handleLogout = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
    });

    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!res.ok) throw new Error("Gagal mengambil profil");

        const data = await res.json();
        setProfile({
          name: data.name,
          photo: `${process.env.REACT_APP_API_BASE_URL}/storage/${data.photo}`,
        });
      } catch (err) {
        console.error("Gagal fetch profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`fixed z-40 top-0 left-0 h-[800px] w-52 bg-[#144470] text-white p-4 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}>
          <div className="mb-8">
            <h1 className="text-2xl font-bold">NIW Admin</h1>
            <p className="text-sm text-gray-400">Dashboard</p>
          </div>

          <nav className="flex flex-col gap-4 text-lg">
            <Link to="/dashboard/news" className="flex items-center gap-2 text-white hover:text-yellow-400" onClick={() => setSidebarOpen(false)}>
              <FaNewspaper /> Berita
            </Link>

            <button onClick={handleLogout} className="flex items-center gap-2 text-white hover:text-red-400">
              <FaSignOutAlt /> Logout
            </button>
          </nav>
        </aside>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Top navbar */}
          <header>
            <div className="bg-white shadow px-4 py-3 sticky top-0 z-30">
              <div className="flex items-center justify-between">
                {/* Burger menu for mobile */}
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-black text-xl md:hidden">
                  <FaBars />
                </button>

                {/* Dummy placeholder untuk spacing */}
                <div className="hidden md:block w-8"></div>

                {/* Profile info */}
                <div className="flex justify-end items-center gap-3">
                  {profile ? (
                    <>
                      <img src={profile.photo} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{profile.name}</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 text-sm">Memuat profil...</p>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Outlet for page content */}
          <main className="p-4 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Overlay (klik luar sidebar) */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />}
    </>
  );
};

export default DashboardLayout;
