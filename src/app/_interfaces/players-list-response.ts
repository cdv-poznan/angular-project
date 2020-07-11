import { Player } from './player';
import { ResultMeta } from './resultmeta';

export interface PlayersListResponse {
    data: Player[];
    meta: ResultMeta[]
  }