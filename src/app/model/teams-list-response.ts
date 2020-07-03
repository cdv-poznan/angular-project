import { Team } from './team';
import { ResultMeta } from '../model/resultmeta';

export interface TeamsListResponse {
    data: Team[];
    meta: ResultMeta[]
  }