import { GetQueryInterface } from 'interfaces';

export interface CandidateExperienceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CandidateExperienceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
