import { Component, OnInit } from '@angular/core';
import { Drivers } from '../model/Drivers';
import { DriversService } from './drivers.service';
import { newArray } from '@angular/compiler/src/util';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  ELEMENT_DATA: Drivers[]
  displayedColumns: string[] = ['position','points','name','nationality','units','speed'];
  dataSource = new MatTableDataSource<Drivers>(this.ELEMENT_DATA)

  public raceResults:  Drivers[]


  constructor(private race_results: DriversService) { }
  ngOnInit(): void {
  }
  getPosts(input: HTMLInputElement){
    let officersIds = []

    this.raceResults = officersIds;
    this.race_results.getPosts(input).subscribe(
      data => {
        data.MRData.RaceTable.Races.forEach(function(item){
          const arr = new Array()
          arr.push(item.raceName)
          item.Results.forEach(function(itemk){
            arr.push(itemk.position,itemk.points, itemk.FastestLap.AverageSpeed.speed, itemk.FastestLap.AverageSpeed.units,itemk.Constructor.nationality, itemk.Constructor.name)

          })
          officersIds.push(arr)
        })
        console.log(officersIds)
        return officersIds
      }
    )
  }
}
