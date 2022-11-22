import React, { FC } from 'react';
import { Bullet } from '../icons/Bullet';

type JobDescriptionProps = {
  description: string;
};

export const JobDescription: FC<JobDescriptionProps> = ({ description }) => {
  const splitedDescriptionArray = description.split('\n  \n');
  let text = '';
  let resposibilitiesArray = [''];
  let benefitsArray = [''];
  let benefitsItems: string[];

  splitedDescriptionArray.forEach(element => {
    if (element.includes('Responsopilities')) {
      resposibilitiesArray = element.split('\n');
    } else if (element.includes('Compensation & Benefits')) {
      benefitsArray = element.split('\n\t');
    } else {
      text = element.toString();
    }
  });

  return (
    <div className="description-text">
      <p className="mb-[46px]">{text}</p>
      <div>
        {resposibilitiesArray.map((item, index) => {
          if (index === 0) {
            return (
              <h3 className="description-subtitles" key={index}>
                {item}
              </h3>
            );
          }
          return (
            <p className="mb-[46px]" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div>
        {benefitsArray.map((item, index) => {
          if (index === 0) {
            return (
              <h3 className="description-subtitles" key={index}>
                {item}
              </h3>
            );
          } else {
            benefitsItems = item.split('.');
            benefitsItems.pop();
            return (
              <ul>
                {benefitsItems.map(item => {
                  return (
                    <li key={item} className="flex items-center">
                      <Bullet />
                      <span className=" ml-[10px]"> {item}</span>
                    </li>
                  );
                })}
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
};
