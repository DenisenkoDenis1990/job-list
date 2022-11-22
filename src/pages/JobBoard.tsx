import { FC } from 'react';
import { JobList } from '../components/JobList/JobList';
import { Paginator } from '../components/Paginator/Paginator';
import { Job } from '../services/jobsApi';

type JobBoardProps = {
  jobs: Job[];
};

export const JobBoard: FC<JobBoardProps> = ({ jobs }) => {
  return (
    <div className="job-board-conteiner">
      <JobList jobs={jobs} />
      <Paginator />
    </div>
  );
};
