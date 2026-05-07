"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateJobPage() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    category: "Technology",
    type: "Full-time",
    description: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.company ||
      !formData.location ||
      !formData.description
    ) {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const formattedData = {
        ...formData,
        skills: formData.requirements
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      const response = await fetch("http://localhost:4000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        router.push("/jobs");
      }
    } catch (err) {
      console.error("Saqlashda xatolik:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" max-w-5xl! mx-auto! min-h-screen! bg-gray-50/30!">
      <Link
        href="/admin/adminJobs"
        className="inline-flex! text-decoration-none items-center! text-sm! font-medium! text-gray-600! hover:text-black! mb-6 border border-gray-300! px-3 py-1.5 rounded-md! bg-white! transition!"
      >
        ← Back to Jobs
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl! font-extrabold! text-gray-900!">
          Create New Job
        </h1>
        <p className="text-gray-500! mt-1 text-lg!">
          Fill in the form below to create a new job posting
        </p>
      </div>

      <div className="bg-white rounded-2xl! shadow-sm! border border-gray-100! p-10">
        <h2 className="text-2xl! font-bold! text-gray-900! mb-8">
          Add New Job
        </h2>

        {error && (
          <div className="mb-6 p-3 bg-red-50! border border-red-100! text-red-600! rounded-lg! text-sm!">
            Please fill in all required fields
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-smQ font-boldQ text-gray-700!">
                Job Title *
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="e.g., Senior Frontend Engineer"
                className="w-full bg-[#fafafa]! border border-gray-200! p-2 rounded-lg! focus:ring-2! focus:ring-blue-200! outline-none! transition!"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm! font-bold! text-gray-700!">
                Company *
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                placeholder="e.g., TechCorp"
                className="w-full bg-[#fafafa]! border border-gray-200! p-2 rounded-lg! focus:ring-2! focus:ring-blue-200! outline-none! transition!"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm! font-bold! text-gray-700!">
                Location *
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                type="text"
                placeholder="e.g., San Francisco, CA"
                className="w-full bg-[#fafafa]! border border-gray-200! p-2 rounded-lg! focus:ring-2! focus:ring-blue-200! outline-none! transition!"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700!">
                Salary (Optional)
              </label>
              <input
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                type="text"
                placeholder="e.g., $100,000 - $150,000"
                className="w-full bg-[#fafafa]! border border-gray-200! p-2 rounded-lg! focus:ring-2! focus:ring-blue-200! outline-none! transition!"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm! font-bold! text-gray-700!">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-[#fafafa]! border border-gray-200! p-2 rounded-lg! outline-none! appearance-none! cursor-pointer"
              >
                <option>Technology</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm! font-bold! text-gray-700!">
                Job Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-[#fafafa] border border-gray-200 p-2 rounded-lg! outline-none appearance-none cursor-pointer"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm! font-bold! text-gray-700!">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Job description and responsibilities..."
              className="w-full bg-[#fafafa] border border-gray-200! p-2 rounded-lg! focus:ring-2! focus:ring-blue-200! outline-none! transition! resize-none!"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm! font-bold! text-gray-700!">
              Requirements (comma-separated)
            </label>
            <input
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              type="text"
              placeholder="e.g., React, TypeScript, 5+ years experience, Node.js"
              className="w-full bg-[#fafafa]! border border-gray-200! p-2 rounded-lg! focus:ring-2! focus:ring-blue-200! outline-none! transition!"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1! bg-[#1e3a8a] hover:bg-blue-900! text-white py-2 rounded-2 font-bold! transition! text-lg! shadow-md! disabled:opacity-50!"
            >
              {loading ? "Adding..." : "Add Job"}
            </button>
            <button
              type="reset"
              onClick={() =>
                setFormData({
                  title: "",
                  company: "",
                  location: "",
                  salary: "",
                  category: "Technology",
                  type: "Full-time",
                  description: "",
                  requirements: "",
                })
              }
              className="flex-1! bg-white hover:bg-gray-50! text-gray-700! py-2 rounded-2 font-bold! border border-gray-200! transition! text-lg!"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
