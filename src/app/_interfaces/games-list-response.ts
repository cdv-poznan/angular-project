import { Game } from './game';
import { ResultMeta } from './resultmeta';

export interface GamesListResponse {
    data: Game[];
    meta: ResultMeta[]
  }