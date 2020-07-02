import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent implements OnInit {
  query;
  page = 1;
  category = 'multi';
  isPrev;
  isNext;
  nextPage;
  prevPage;
  searchResults = { results: '', total_results: '', total_pages: null };
  pagination;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiServiceService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params.query;
      this.category = params.category;
      this.page = params.page ? parseInt(params.page, 10) : 1;
      this.isPrev = this.page !== 1;
      this.searchResults.total_pages = parseInt(
        this.searchResults.total_pages,
        10,
      );
      this.getSearchResults();
    });
  }
  getSearchResults(): void {
    this.apiService
      .getSearchResuts(this.category, this.query, this.page)
      .subscribe((data: any) => (this.searchResults = data));
  }
}
