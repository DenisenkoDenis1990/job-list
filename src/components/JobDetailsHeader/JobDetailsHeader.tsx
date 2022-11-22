import { FC } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Bookmark } from '../icons/Bookmark';
import { Share } from '../icons/Share';
export const JobDetailsHeader: FC = () => {
  return (
    <div className="job-details-header-conteiner">
      <h2 className="section-title xl:border-0 mb-[24px] xl:mb-0">
        Job Details
      </h2>
      <ul className="flex ">
        <li className="flex items-center mr-[36px]">
          <div className="xl:hidden">
            <FaRegStar className="w-[21px] h-[20px] fill-[#3A4562]/[0.8]" />
          </div>
          <div className="hidden xl:inline-block">
            <Bookmark />
          </div>
          <span className="ml-[10px]">Save to my list</span>
        </li>
        <li className="flex items-center">
          <Share />
          <span className="ml-[10px]">Share</span>
        </li>
      </ul>
    </div>
  );
};
