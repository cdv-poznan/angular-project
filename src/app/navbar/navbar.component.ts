import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public isMenuCollapsed = true;
  searchQuery = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  onSubmit(form) {
    this.searchQuery = '';
    this.isMenuCollapsed = true;
    this.router.navigate([`/search`], {
      queryParams: { category: 'multi', query: form.searchQuery },
    });
  }
}
