import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/book.service';

@Component({
    selector: 'app-card-page',
    templateUrl: './card-page.component.html',
    styleUrl: './card-page.component.scss',
    standalone: false
})
export class CardPageComponent implements OnInit {
  book?: Book;
  selectedStatus = 'Choose a status';
  statuses = ['Choose a status', 'Started', 'Stopped', 'Liked'];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!id) {
        this.router.navigate(['/home']);
        return;
      }

      const book = this.bookService.getBookById(id);
      if (!book) {
        this.router.navigate(['/home']);
        return;
      }

      this.book = book;
    });
  }
}
