import { Team } from './team';
import { ResultMeta } from './resultmeta';

export interface TeamsListResponse {
    data: Team[];
    meta: ResultMeta[]
  }