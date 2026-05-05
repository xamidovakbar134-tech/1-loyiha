import Link from "next/link";

export default function CreateJobPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <Link
        href="/jobs"
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-6 border border-gray-300 px-3 py-1.5 rounded-md bg-white transition"
      >
        ← Back to Jobs
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Create New Job
        </h1>
        <p className="text-gray-500 mt-1 text-lg">
          Fill in the form below to create a new job posting
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Add New Job</h2>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Job Title *
              </label>
              <input
                type="text"
                placeholder="e.g., Senior Frontend Engineer"
                className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Company *
              </label>
              <input
                type="text"
                placeholder="e.g., TechCorp"
                className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Location *
              </label>
              <input
                type="text"
                placeholder="e.g., San Francisco, CA"
                className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Salary (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., $100,000 - $150,000"
                className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Category
              </label>
              <select className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg outline-none appearance-none cursor-pointer">
                <option>Technology</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Job Type
              </label>
              <select className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg outline-none appearance-none cursor-pointer">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Description *
            </label>
            <textarea
              rows={5}
              placeholder="Job description and responsibilities..."
              className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Requirements (comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g., React, TypeScript, 5+ years experience, Node.js"
              className="w-full bg-[#fafafa] border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-[#1e3a8a] hover:bg-blue-900 text-white py-3.5 rounded-xl font-bold transition text-lg shadow-md"
            >
              Add Job
            </button>
            <button
              type="reset"
              className="flex-1 bg-white hover:bg-gray-50 text-gray-700 py-3.5 rounded-xl font-bold border border-gray-200 transition text-lg"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
