import { FC } from 'react';
import { JobListItem } from '../JobListItem/JobListItem';
import { Job } from '../../services/jobsApi';
type JobListProps = {
  jobs: Job[];
};
export const JobList: FC<JobListProps> = ({ jobs }) => {
  return (
    <div>
      <ul className="mb-[26px] xl:mb-[48px]">
        {jobs.map(job => {
          return <JobListItem job={job} key={job.id} />;
        })}
      </ul>
    </div>
  );
};
