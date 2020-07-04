import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../_services/players.service';
import { Player } from '../../_interfaces/player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  public players: Player[];

  constructor(private playersService: PlayersService) { }

  async ngOnInit(): Promise<void> {
    this.players = await this.playersService.getPlayersList();
  }

}
