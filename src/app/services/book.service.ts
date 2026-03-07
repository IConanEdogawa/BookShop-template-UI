import { Injectable } from '@angular/core';
import { BOOKS_MOCK } from '../data/books.mock';
import { Book } from '../models/book.model';

type PopularityPeriod = 'day' | 'week' | 'month';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly books = BOOKS_MOCK;

  getBooks(searchTerm = ''): Book[] {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return [...this.books];
    }

    return this.books.filter((book) =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.tags.some((tag) => tag.toLowerCase().includes(term)) ||
      book.categories.some((category) => category.toLowerCase().includes(term))
    );
  }

  getFeaturedBooks(limit = 8): Book[] {
    return [...this.books]
      .sort((a, b) => b.popularity.month - a.popularity.month)
      .slice(0, limit);
  }

  getPopularBooks(period: PopularityPeriod, searchTerm = ''): Book[] {
    return this.getBooks(searchTerm).sort((a, b) => b.popularity[period] - a.popularity[period]);
  }

  getBookById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  getRelatedBooks(id: number, limit = 6): Book[] {
    const targetBook = this.getBookById(id);
    if (!targetBook) {
      return this.getFeaturedBooks(limit);
    }

    return this.books
      .filter((book) => book.id !== id)
      .sort((a, b) => this.getCategoryMatchScore(b, targetBook) - this.getCategoryMatchScore(a, targetBook))
      .slice(0, limit);
  }

  private getCategoryMatchScore(book: Book, targetBook: Book): number {
    return book.categories.filter((category) => targetBook.categories.includes(category)).length;
  }
}
