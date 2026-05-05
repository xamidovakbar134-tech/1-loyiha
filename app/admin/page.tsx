"use client";
import  Link  from "next/link";
import { useState } from "react";

const AdminFullPage = () => {
 
  const [email, setEmail] = useState("admin@jobportal.com");
  const [password, setPassword] = useState("admin123");

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
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
          <nav className="space-y-6">
            <Link href={"/adminJobs"}>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">📋</span>
              <span className="font-medium">Jobs</span>
            </div>
            </Link>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">➕</span>
              <span className="font-medium">Create Job</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">📩</span>
              <span className="font-medium">Applications</span>
            </div>
          </nav>
        </div>

   
        <Link href="/">
          <button className="w-full bg-[#ff4d4d] hover:bg-red-600 text-white py-2 rounded-2 font-bold! transition! mt-auto1">
            Logout
          </button>
        </Link>
      </aside>


      <main className="flex-1 ml-64 flex flex-col items-center justify-center p-10">
       
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-[#1e3a8a] text-white font-bold p-2 rounded-lg text-xl">
              JP
            </div>
            <h1 className=" font-bold! text-black">Job Portal</h1>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800! mb-2">
            Admin Dashboard
          </h2>
          <p className="text-gray-500 text-lg">
            Sign in to manage job postings
          </p>
        </div>

     
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 w-full max-w-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700! font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2! focus:ring-blue-500! outline-none! transition!"
                placeholder="admin@jobportal.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2! focus:ring-blue-500! outline-none! transition!"
              />
            </div>

            <button className="w-full bg-blue-700 hover:bg-blue-900 text-white py-2 rounded-2 font-bold text-lg transition shadow-lg">
              Sign In
            </button>
          </form>

          
          <div className="mt-8 bg-[#f3f0f1] p-3 rounded-xl border border-gray-200/50">
            <p className="font-bold text-gray-800! mb-2">Demo Credentials:</p>
            <div className="text-gray-600! space-y-1!">
              <p>Email: admin@jobportal.com</p>
              <p>Password: admin123</p>
            </div>
          </div>
        </div>

        <Link href="/">
          <button className="mt-8! text-blue-800 font-semibold hover:underline decoration-2 underline-offset-4">
            Back to Home
          </button>
        </Link>
      </main>
    </div>
  );
};

export default AdminFullPage;
