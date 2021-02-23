import { Component, OnInit } from '@angular/core';
import { RaceScheduleService } from './race-schedule.service';
import { RaceSchedule } from '../model/RaceSchedule';

@Component({
  selector: 'app-race-schedule',
  templateUrl: './race-schedule.component.html',
  styleUrls: ['./race-schedule.component.scss']
})
export class RaceScheduleComponent implements OnInit {

  public raceResults: RaceSchedule[]

  constructor(private race_results: RaceScheduleService) { }
  ngOnInit(): void {
  }
  getPosts(input: HTMLInputElement,){
    let officersIds = []
    this.raceResults = officersIds;
    this.race_results.getPosts(input).subscribe(
     data => {
        data.MRData.StandingsTable.StandingsLists.forEach(function(item){
            item.ConstructorStandings.forEach(function(item){
              officersIds.push(
                new Array(
                  item.position,
                  item.points,
                  item.Constructor.name,
                  item.Constructor.nationality)
                )
            }
          )
          console.log(officersIds)
        }
       )
      }
    )
  }
}