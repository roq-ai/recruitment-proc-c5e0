import { GetQueryInterface } from 'interfaces';

export interface HiringManagerInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  years_of_experience?: number;

  _count?: {};
}

export interface HiringManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
}
