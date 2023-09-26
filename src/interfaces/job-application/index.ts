import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  application_status: string;

  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  application_status?: string;
}
