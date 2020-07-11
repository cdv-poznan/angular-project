import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private static readonly API_KEY = 'AIzaSyAuDhPTKYedbL1EGEtERgu9KC-Dj4Et5hg';
  private static readonly API_URL = 
    `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&chart=mostPopular&regionCode=PL&maxResults=12&key=${HomeService.API_KEY}`;

  private static readonly API_BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&key=${HomeService.API_KEY}`;

  constructor(private httpClient: HttpClient) {}

  public getVideos(): Observable<object> {
    return this.httpClient
      .get(HomeService.API_URL)
      .pipe(map((res) => {
        return res;
      }));
  }

  public getVideosByTagname(tagName): Observable<object> {
    return this.httpClient
      .get(HomeService.API_BASE_URL + '&q=%23' + tagName + '%23')
      .pipe(map((res) => {
        return res;
      }));
  }

  public appendVideos(item) {
    const trendingYoutubeViedeosWrapper = document.getElementById('trending-youtube-videos');
    if (item) {
      var videoId;
      if(item.id.videoId !== undefined) {
        videoId = item.id.videoId;
      }
      else {
        videoId = item.id;
      }
      const div = document.createElement('div');
      div.className = 'col-lg-4 col-md-6 col-sm-12 tm-catalog-item';
      div.innerHTML = `<div class="position-relative tm-thumbnail-container">
            <img src="https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg" alt="Image" class="img-fluid tm-catalog-item-img">
            <a href="https://www.youtube.com/watch?v=${videoId}" class="position-absolute tm-img-overlay">
                <i class="fas fa-play tm-overlay-icon"></i>
            </a>
        </div>
        <div class="tm-bg-gray tm-catalog-item-star" style="text-align: right; padding: 10px 20px; cursor: pointer;">
          <div class="star">&#9734</div>
        </div>
        <div class="p-4 tm-bg-gray tm-catalog-item-description">
            <h3 class="tm-text-primary mb-3 tm-catalog-item-title">${item.snippet.title}</h3>
            <p class="tm-catalog-item-text" style="max-height: 250px; overflow: hidden;">${item.snippet.description}</p>
        </div>`;
      trendingYoutubeViedeosWrapper.appendChild(div);
    }
  }
}
