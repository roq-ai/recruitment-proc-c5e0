import { GetQueryInterface } from 'interfaces';

export interface JobOpeningInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  salary_range?: string;

  _count?: {};
}

export interface JobOpeningGetQueryInterface extends GetQueryInterface {
  id?: string;
  salary_range?: string;
}
