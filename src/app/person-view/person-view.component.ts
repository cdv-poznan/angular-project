import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./person-view.component.scss'],
})
export class PersonViewComponent implements OnInit {
  person$: Observable<any>;
  personFilmography$: Observable<any>;
  title: string;
  imageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getPerson(params.get('id')),
      ),
    );
    this.personFilmography$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getPersonFilmography(params.get('id')),
      ),
    );
    this.person$.subscribe((data) => {
      this.imageUrl = data.profile_path
        ? `https://image.tmdb.org/t/p/w185${data.profile_path}`
        : 'https://fakeimg.pl/185x278/?text=No%20photo';
      this.titleService.setTitle(`${data.name} - Filmeo`);
    });
  }
}
