import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  videos: any[];
  private sub: any;
  public name: string;

  constructor(private homeService: HomeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.videos = [];

    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });

    this.homeService.getVideosByTagname(this.name).subscribe(
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
