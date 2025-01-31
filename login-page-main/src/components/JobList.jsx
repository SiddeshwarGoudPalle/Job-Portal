import React from 'react';

const jobs = [
  { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Remote' },
  { id: 2, title: 'Product Manager', company: 'Innovate Inc', location: 'New York' },
  { id: 3, title: 'Data Scientist', company: 'DataWorks', location: 'San Francisco' },
];

const JobList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;