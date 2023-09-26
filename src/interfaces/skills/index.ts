import { GetQueryInterface } from 'interfaces';

export interface SkillsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SkillsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
