import axios from 'axios';

export type Location = {
  lat: number;
  long: number;
};

export type Job = {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: Location;
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
};

type getJobsResponse = {
  data: Job[];
};

const KEY = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
axios.defaults.baseURL =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

const getJobs = async () => {
  try {
    const { data, status } = await axios.get<getJobsResponse>(
      `?access_token=${KEY}`
    );
    console.log('response status is: ', status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }

  //   const response = await axios(`?access_token=${KEY}`);
  //   return response.data;
};

export default getJobs;
