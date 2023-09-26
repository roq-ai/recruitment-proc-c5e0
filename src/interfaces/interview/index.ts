import { GetQueryInterface } from 'interfaces';

export interface InterviewInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  interview_feedback?: string;

  _count?: {};
}

export interface InterviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  interview_feedback?: string;
}
