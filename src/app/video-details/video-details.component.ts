import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videos: any[];
  private sub: any;
  public id: string;

  constructor(private homeService: HomeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.videos = [];

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.homeService.getVideosById(this.id).subscribe(
      videoList => {
        if (typeof videoList['items'] !== 'undefined') {
          for (const item of videoList['items']) {
            this.videos.push(item);
            this.homeService.appendSingleVideo(item);
          }
        }
      }
    );
  }
}
