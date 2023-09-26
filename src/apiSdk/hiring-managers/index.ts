import axios from 'axios';
import queryString from 'query-string';
import { HiringManagerInterface, HiringManagerGetQueryInterface } from 'interfaces/hiring-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHiringManagers = async (
  query?: HiringManagerGetQueryInterface,
): Promise<PaginatedInterface<HiringManagerInterface>> => {
  const response = await axios.get('/api/hiring-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHiringManager = async (hiringManager: HiringManagerInterface) => {
  const response = await axios.post('/api/hiring-managers', hiringManager);
  return response.data;
};

export const updateHiringManagerById = async (id: string, hiringManager: HiringManagerInterface) => {
  const response = await axios.put(`/api/hiring-managers/${id}`, hiringManager);
  return response.data;
};

export const getHiringManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/hiring-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHiringManagerById = async (id: string) => {
  const response = await axios.delete(`/api/hiring-managers/${id}`);
  return response.data;
};
