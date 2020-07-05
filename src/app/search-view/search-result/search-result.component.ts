import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() result;
  @Input() mediaType;
  path: string;
  fullPath: string;

  constructor() {}

  ngOnInit(): void {
    if (this.mediaType == 'multi') this.mediaType = this.result.media_type;

    switch (this.mediaType) {
      case 'tv':
        this.path = this.result.poster_path;
        break;
      case 'movie':
        this.path = this.result.poster_path;
        break;
      case 'person':
        this.path = this.result.profile_path;
        break;
      default:
        break;
    }

    if (this.path)
      this.fullPath = 'https://image.tmdb.org/t/p/w185' + this.path;
    else this.fullPath = 'https://fakeimg.pl/185x278/?text=No%20poster';
  }
}
