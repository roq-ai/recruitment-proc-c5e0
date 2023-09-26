import axios from 'axios';
import queryString from 'query-string';
import {
  CandidateQualificationsInterface,
  CandidateQualificationsGetQueryInterface,
} from 'interfaces/candidate-qualifications';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCandidateQualifications = async (
  query?: CandidateQualificationsGetQueryInterface,
): Promise<PaginatedInterface<CandidateQualificationsInterface>> => {
  const response = await axios.get('/api/candidate-qualifications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCandidateQualifications = async (candidateQualifications: CandidateQualificationsInterface) => {
  const response = await axios.post('/api/candidate-qualifications', candidateQualifications);
  return response.data;
};

export const updateCandidateQualificationsById = async (
  id: string,
  candidateQualifications: CandidateQualificationsInterface,
) => {
  const response = await axios.put(`/api/candidate-qualifications/${id}`, candidateQualifications);
  return response.data;
};

export const getCandidateQualificationsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/candidate-qualifications/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteCandidateQualificationsById = async (id: string) => {
  const response = await axios.delete(`/api/candidate-qualifications/${id}`);
  return response.data;
};
