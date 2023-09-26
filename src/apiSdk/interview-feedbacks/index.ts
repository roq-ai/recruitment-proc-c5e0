import axios from 'axios';
import queryString from 'query-string';
import { InterviewFeedbackInterface, InterviewFeedbackGetQueryInterface } from 'interfaces/interview-feedback';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInterviewFeedbacks = async (
  query?: InterviewFeedbackGetQueryInterface,
): Promise<PaginatedInterface<InterviewFeedbackInterface>> => {
  const response = await axios.get('/api/interview-feedbacks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInterviewFeedback = async (interviewFeedback: InterviewFeedbackInterface) => {
  const response = await axios.post('/api/interview-feedbacks', interviewFeedback);
  return response.data;
};

export const updateInterviewFeedbackById = async (id: string, interviewFeedback: InterviewFeedbackInterface) => {
  const response = await axios.put(`/api/interview-feedbacks/${id}`, interviewFeedback);
  return response.data;
};

export const getInterviewFeedbackById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/interview-feedbacks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInterviewFeedbackById = async (id: string) => {
  const response = await axios.delete(`/api/interview-feedbacks/${id}`);
  return response.data;
};
