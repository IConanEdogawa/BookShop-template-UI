import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/book.service';

@Component({
    selector: 'app-card-page-footer',
    templateUrl: './card-page-footer.component.html',
    styleUrl: './card-page-footer.component.scss',
    standalone: false
})
export class CardPageFooterComponent implements OnChanges {
  @Input() currentBookId = 0;
  books: Book[] = [];

  constructor(private readonly bookService: BookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentBookId']) {
      this.books = this.bookService.getRelatedBooks(this.currentBookId);
    }
  }
}
