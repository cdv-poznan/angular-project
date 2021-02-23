import { Component, OnInit } from '@angular/core';
import { RaceResultsService } from './race-results.service';
import { RaceResults } from '../model/RaceResults';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent implements OnInit {

  constructor(private race_results: RaceResultsService) { }

  public raceResults: RaceResults[]
  ngOnInit(): void {
  }
  getPosts(input: HTMLInputElement,){
    let officersIds = []
    this.raceResults = officersIds;
    this.race_results.getPosts(input).subscribe(
     data => {
       console.log(data.MRData)
       data.MRData.StandingsTable.StandingsLists.forEach(function(item){
        item.DriverStandings.forEach(function(item){
          officersIds.push(new Array(
            item.position,
            item.points,item.Driver.givenName,
            item.Driver.familyName,
            item.Driver.nationality
            ));
        })
       })
      }
    )
  }
}
