import axios from 'axios';
import queryString from 'query-string';
import { CandidateExperienceInterface, CandidateExperienceGetQueryInterface } from 'interfaces/candidate-experience';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCandidateExperiences = async (
  query?: CandidateExperienceGetQueryInterface,
): Promise<PaginatedInterface<CandidateExperienceInterface>> => {
  const response = await axios.get('/api/candidate-experiences', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCandidateExperience = async (candidateExperience: CandidateExperienceInterface) => {
  const response = await axios.post('/api/candidate-experiences', candidateExperience);
  return response.data;
};

export const updateCandidateExperienceById = async (id: string, candidateExperience: CandidateExperienceInterface) => {
  const response = await axios.put(`/api/candidate-experiences/${id}`, candidateExperience);
  return response.data;
};

export const getCandidateExperienceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/candidate-experiences/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteCandidateExperienceById = async (id: string) => {
  const response = await axios.delete(`/api/candidate-experiences/${id}`);
  return response.data;
};
