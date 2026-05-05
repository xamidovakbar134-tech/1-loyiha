const JobsManagement = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      location: "San Francisco, CA",
      company: "TechCorp",
      category: "Technology",
      type: "Full-time",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "New York, NY",
      company: "Design Studio",
      category: "Design",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      location: "Los Angeles, CA",
      company: "MarketingPro",
      category: "Marketing",
      type: "Full-time",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      location: "Remote",
      company: "StartupHub",
      category: "Technology",
      type: "Full-time",
    },
    {
      id: 5,
      title: "Sales Representative",
      location: "Chicago, IL",
      company: "SalesForce Co",
      category: "Sales",
      type: "Full-time",
    },
    {
      id: 6,
      title: "Financial Analyst",
      location: "Boston, MA",
      company: "Finance Solutions",
      category: "Finance",
      type: "Full-time",
    },
  ];

  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Jobs Management</h1>
        <p className="text-gray-500 mt-1">Manage all your job postings</p>
        <button className="mt-6 px-6 py-2 bg-[#1e3a8a] text-white font-semibold rounded-md hover:bg-blue-900 transition shadow-md">
          Create New Job
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">
            All Jobs ({jobs.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#fdfafb]">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Company
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-5">
                    <p className="font-bold text-gray-900">{job.title}</p>
                    <p className="text-xs text-gray-400">{job.location}</p>
                  </td>
                  <td className="px-6 py-5 text-gray-600 font-medium">
                    {job.company}
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
                      {job.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
                      {job.type}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="px-4 py-1.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-100 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobsManagement;
