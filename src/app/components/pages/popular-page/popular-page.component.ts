import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/book.service';

@Component({
    selector: 'app-popular-page',
    templateUrl: './popular-page.component.html',
    styleUrl: './popular-page.component.scss',
    standalone: false
})
export class PopularPageComponent implements OnInit {
  booksMonth: Book[] = [];
  booksWeek: Book[] = [];
  booksDay: Book[] = [];

  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const search = params.get('search') ?? '';
      this.booksMonth = this.bookService.getPopularBooks('month', search);
      this.booksWeek = this.bookService.getPopularBooks('week', search);
      this.booksDay = this.bookService.getPopularBooks('day', search);
    });
  }
}
