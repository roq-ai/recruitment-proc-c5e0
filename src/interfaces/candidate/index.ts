import { GetQueryInterface } from 'interfaces';

export interface CandidateInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  previous_experience?: string;
  name?: string;
  email?: string;
  mobile?: string;

  _count?: {};
}

export interface CandidateGetQueryInterface extends GetQueryInterface {
  id?: string;
  previous_experience?: string;
  name?: string;
  email?: string;
  mobile?: string;
}
