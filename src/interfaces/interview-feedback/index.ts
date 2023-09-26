import { GetQueryInterface } from 'interfaces';

export interface InterviewFeedbackInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  interviewer_comments?: string;

  _count?: {};
}

export interface InterviewFeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  interviewer_comments?: string;
}
