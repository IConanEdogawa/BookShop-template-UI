import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {
  books: Book[] = [];

  constructor(private readonly bookService: BookService) {
    this.books = this.bookService.getFeaturedBooks();
  }
}
