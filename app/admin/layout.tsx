/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("isAdmin");
    if (auth === "true") {
      setIsAdmin(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    router.push("/admin"); 
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-black text-white fixed h-full left-0 top-0 flex flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-white text-black font-bold px-2 py-1 rounded text-lg">
            JP
          </div>
          <span className="text-xl font-bold tracking-tight">JobPortal</span>
        </div>

        <div className="flex-1">
          <p className="text-gray-500 text-xs font-bold mb-5 uppercase tracking-wider">
            Admin Menu
          </p>

          {isAdmin ? (
            <nav className="space-y-6">
              <Link href={"/admin/adminJobs"} className="text-decoration-none ">
                <div className="flex items-center gap-3 cursor-pointer text-white hover:text-blue-400! transition!">
                  <span className="text-xl">📋</span>
                  <span className="font-medium">Jobs</span>
                </div>
              </Link>
              <Link href={"/admin/createJob"} className="text-decoration-none ">
                <div className="flex items-center gap-3 cursor-pointer my-3 text-white hover:text-blue-400! transition!">
                  <span className="text-xl">➕</span>
                  <span className="font-medium">Create Job</span>
                </div>
              </Link>
              <Link
                href={"/admin/aplications"}
                className="text-decoration-none mt-2"
              >
                <div className="flex items-center gap-3 cursor-pointer text-white hover:text-blue-400! transition!">
                  <span className="text-xl">📩</span>
                  <span className="font-medium">Applications</span>
                </div>
              </Link>
            </nav>
          ) : (
            <div className="text-gray-500 text-sm italic">
              Please sign in to access menu.
            </div>
          )}
        </div>

        {isAdmin ? (
          <button
            onClick={handleLogout}
            className="w-full bg-[#ff4d4d] hover:bg-red-600 text-white py-2 rounded-2 font-bold! transition! mt-auto1"
          >
            Logout
          </button>
        ) : (
          <Link href="/admin">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-2 font-bold! transition!">
              Go to Login
            </button>
          </Link>
        )}
      </aside>

      <div className="ml-72 min-h-screen w-full bg-gray-100 p-10 overflow-y-auto">
        {isLoading ? (
          <div className="p-10 text-center">Loading...</div>
        ) : isAdmin ? (
          children
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <h2 className="text-2xl font-bold text-gray-800">yuklanopti</h2>
            <p className="text-gray-500">
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
