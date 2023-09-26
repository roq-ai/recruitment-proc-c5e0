import { GetQueryInterface } from 'interfaces';

export interface CandidateQualificationsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CandidateQualificationsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
