import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import Container from "../common/Container";

const LatestJobs = () => {
  // All job data
  const allJobs = [
    {
      id: 1,
      title: "Motion Designer",
      category: "Video Editor",
      location: "Dhaka",
      level: "Mid Level",
      description:
        "You will be responsible for frontend and backend development tasks. You will work closely with our...",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    },
    {
      id: 2,
      title: "Frontend Developer",
      category: "Web Developer",
      location: "Dhaka",
      level: "Senior Level",
      description:
        "You will design and develop frontend apps. Collaboration with UI/UX teams required...",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      id: 3,
      title: "Backend Engineer",
      category: "Web Developer",
      location: "Chattogram",
      level: "Mid Level",
      description:
        "Responsible for server-side APIs, integrations, and backend development...",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      category: "Designer",
      location: "Dhaka",
      level: "Entry Level",
      description:
        "Create beautiful UI mockups and deliver a smooth user experience...",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    },
  ];

  // Extract unique categories and locations
  const categories = [...new Set(allJobs.map((job) => job.category))];
  const locations = [...new Set(allJobs.map((job) => job.location))];

  // States
  const [selectedCategories, setSelectedCategories] = useState([
    ...new Set(allJobs.map((job) => job.category)),
  ]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle category filter toggle
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle location filter toggle
  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  // Remove a filter from "Current Search"
  const handleRemoveFilter = (filter) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== filter));
    setSelectedLocations((prev) => prev.filter((l) => l !== filter));
  };

  // Filtered jobs based on search, categories, and locations
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(job.category);

      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategories, selectedLocations]);

  return (
    <section className="bg-gray-50 py-10 px-6 lg:px-16">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 bg-transparent">
            <h2 className="text-4xl font-semibold leading-[54px]">
              Latest Jobs
            </h2>

            <p className="text-base text-gray-500 mt-2 mb-10">
              Get your desired job from top companies
            </p>

            {/* Current Search */}
            {(selectedCategories.length > 0 ||
              selectedLocations.length > 0) && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Current Search</h3>
                <div className="flex flex-wrap gap-2">
                  {[...selectedCategories, ...selectedLocations].map(
                    (filter, idx) => (
                      <span
                        key={idx}
                        className="bg-red-100 text-gray-700 text-xs px-3 py-1 rounded cursor-pointer hover:bg-red-200"
                        onClick={() => handleRemoveFilter(filter)}
                      >
                        {filter} ✕
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Search by Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Search by Categories</h3>
              {categories.map((cat, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2 mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span className="text-gray-600 text-sm">{cat}</span>
                </label>
              ))}
            </div>

            {/* Search by Location */}
            <div>
              <h3 className="text-sm font-medium mb-3">Search by Location</h3>
              {locations.map((loc, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2 mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-red-500 rounded border-gray-300"
                    checked={selectedLocations.includes(loc)}
                    onChange={() => handleLocationChange(loc)}
                  />
                  <span className="text-gray-600 text-sm">{loc}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="w-full max-w-[500px] flex items-center mb-8 ml-auto">
              <input
                type="text"
                placeholder="Search job post....."
                className="flex-1 border border-red-300 rounded-l-full px-5 py-2 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-red-500 text-white rounded-r-full px-5 py-[11px]">
                <FiSearch size={20} />
              </button>
            </div>

            {/* Job Cards */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
                  >
                    <img
                      src={job.logo}
                      alt={job.title}
                      className="w-10 h-10 mb-3"
                    />
                    <h3 className="text-lg font-semibold">{job.title}</h3>

                    <div className="flex gap-2 my-2">
                      <span className="bg-blue-100 text-gray-700 text-xs px-3 py-1 rounded">
                        {job.location}
                      </span>
                      <span className="bg-red-100 text-gray-700 text-xs px-3 py-1 rounded">
                        {job.level}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {job.description}
                    </p>

                    <button className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600 transition">
                      Job Details
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-10">No jobs found</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestJobs;
