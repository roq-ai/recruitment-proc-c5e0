import axios from 'axios';
import queryString from 'query-string';
import { SkillsInterface, SkillsGetQueryInterface } from 'interfaces/skills';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSkills = async (query?: SkillsGetQueryInterface): Promise<PaginatedInterface<SkillsInterface>> => {
  const response = await axios.get('/api/skills', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSkills = async (skills: SkillsInterface) => {
  const response = await axios.post('/api/skills', skills);
  return response.data;
};

export const updateSkillsById = async (id: string, skills: SkillsInterface) => {
  const response = await axios.put(`/api/skills/${id}`, skills);
  return response.data;
};

export const getSkillsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/skills/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSkillsById = async (id: string) => {
  const response = await axios.delete(`/api/skills/${id}`);
  return response.data;
};
