import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: any[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.videos = [];
    this.homeService.getVideos().subscribe(
      videoList => {
        if (typeof videoList['items'] !== 'undefined') {
          for (const item of videoList['items']) {
            this.videos.push(item);
            this.homeService.appendVideos(item);
          }
        }
      }
    );
  }
}
