import axios from 'axios';
import queryString from 'query-string';
import { RecruitmentProcessInterface, RecruitmentProcessGetQueryInterface } from 'interfaces/recruitment-process';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRecruitmentProcesses = async (
  query?: RecruitmentProcessGetQueryInterface,
): Promise<PaginatedInterface<RecruitmentProcessInterface>> => {
  const response = await axios.get('/api/recruitment-processes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRecruitmentProcess = async (recruitmentProcess: RecruitmentProcessInterface) => {
  const response = await axios.post('/api/recruitment-processes', recruitmentProcess);
  return response.data;
};

export const updateRecruitmentProcessById = async (id: string, recruitmentProcess: RecruitmentProcessInterface) => {
  const response = await axios.put(`/api/recruitment-processes/${id}`, recruitmentProcess);
  return response.data;
};

export const getRecruitmentProcessById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/recruitment-processes/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteRecruitmentProcessById = async (id: string) => {
  const response = await axios.delete(`/api/recruitment-processes/${id}`);
  return response.data;
};
