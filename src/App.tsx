import { useEffect, useState } from 'react';
import { JobBoard } from './pages/JobBoard';
import { JobDetails } from './pages/JobDetails';
import { Routes, Route } from 'react-router-dom';
import getJobs from './services/jobsApi';
export const App = () => {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem('jobs')!) ?? []
  );

  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch(error => console.log(error));
  }, []);

  localStorage.setItem('jobs', JSON.stringify(jobs));

  const localJobs = JSON.parse(localStorage.getItem('jobs')!);

  return (
    <div>
      <Routes>
        <Route path="/" element={<JobBoard jobs={jobs} />}></Route>
        <Route path="/:jobId" element={<JobDetails jobs={localJobs} />}></Route>
      </Routes>
    </div>
  );
};
