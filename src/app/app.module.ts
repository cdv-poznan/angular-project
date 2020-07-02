import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import { SharedComponent } from './shared/shared.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';

@NgModule({
  declarations: [AppComponent, TeamsComponent, PlayersComponent, GamesComponent, SharedComponent, TeamsListComponent, TeamDetailsComponent, PlayersListComponent, PlayerDetailsComponent, GamesListComponent, GameDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
