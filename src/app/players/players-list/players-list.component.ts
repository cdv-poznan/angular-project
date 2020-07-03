import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../../model/player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  public players: Player[];

  constructor(private playersService: PlayersService) { }

  async ngOnInit(): Promise<void> {
    this.players = await this.playersService.getPlayers();
  }

}
