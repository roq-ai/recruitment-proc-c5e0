import axios from 'axios';
import queryString from 'query-string';
import { JobOpeningInterface, JobOpeningGetQueryInterface } from 'interfaces/job-opening';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobOpenings = async (
  query?: JobOpeningGetQueryInterface,
): Promise<PaginatedInterface<JobOpeningInterface>> => {
  const response = await axios.get('/api/job-openings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobOpening = async (jobOpening: JobOpeningInterface) => {
  const response = await axios.post('/api/job-openings', jobOpening);
  return response.data;
};

export const updateJobOpeningById = async (id: string, jobOpening: JobOpeningInterface) => {
  const response = await axios.put(`/api/job-openings/${id}`, jobOpening);
  return response.data;
};

export const getJobOpeningById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-openings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobOpeningById = async (id: string) => {
  const response = await axios.delete(`/api/job-openings/${id}`);
  return response.data;
};
