const JobApplications = () => {
  const applications = [
    {
      id: 1,
      name: "nozim",
      email: "kozim@gmail.com",
      job: "Senior Frontend Engineer - TechCorp",
      date: "Apr 30, 2026, 08:51 AM",
    },
  ];

  return (
    <div className="p-8 bg-gray-50! min-h-screen font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
        <p className="text-gray-500 mt-1">
          Review and manage all job applications ({applications.length} total)
        </p>
      </div>

      <div className="bg-white rounded-xl! border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 px-6 font-semibold text-sm text-gray-700">
                Name
              </th>
              <th className="py-4 px-6 font-semibold text-sm text-gray-700">
                Email
              </th>
              <th className="py-4 px-6 font-semibold text-sm text-gray-700">
                Job
              </th>
              <th className="py-4 px-6 font-semibold text-sm text-gray-700">
                Applied Date
              </th>
              <th className="py-4 px-6 font-semibold text-sm text-gray-700 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm text-gray-800 font-medium">
                  {app.name}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{app.email}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{app.job}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{app.date}</td>
                <td className="py-4 px-6 text-sm text-right">
                  <div className="flex justify-end gap-4">
                    <button className="flex items-center gap-1 text-gray-900 hover:underline font-medium">
                      View
                    </button>
                    <button className="flex items-center gap-1 text-red-600 hover:text-red-700 font-medium">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplications;
