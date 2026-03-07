import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: false
})
export class NavbarComponent {
  searchTerm = '';

  constructor(private readonly router: Router) {}

  onSearch(): void {
    this.router.navigate(['/popular'], { queryParams: { search: this.searchTerm || null } });
  }

}
