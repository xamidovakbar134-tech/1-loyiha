import Header from "../Header";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-12 bg-gray-50 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our curated list of job openings and find the perfect match
            for your career.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Filter Jobs</h2>
          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full border rounded-lg px-3 py-2"
          />
          <select className="w-full border rounded-lg px-3 py-2">
            <option>All Categories</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Reset Filters
          </button>
        </div>

        <main className="md:col-span-2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Available Jobs (6 positions)</h2>

          <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Senior Frontend Engineer</h3>
            <p className="text-gray-600">
              We are looking for an experienced Frontend Engineer to join our
              growing team. You will work on modern web applications using React
              and TypeScript.
            </p>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 bg-gray-100 rounded">Technology</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Full-time</span>
            </div>

            <p className="text-gray-700">📍 San Francisco, CA</p>
            <p className="text-gray-700">💰 $120,000 - $160,000</p>

            <div className="text-gray-600 text-sm">
              Requirements: React, TypeScript, 5+ years experience, +1 more
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
