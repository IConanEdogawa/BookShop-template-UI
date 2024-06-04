import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page-footer',
  templateUrl: './card-page-footer.component.html',
  styleUrl: './card-page-footer.component.scss'
})
export class CardPageFooterComponent {
  books: any[] = [
    {
      image: 'assets/images/image1.png',
      title: 'Название книги 1',
      author: 'Автор 1'
    },
    {
      image: 'assets/images/image2.png',
      title: 'Название книги 2',
      author: 'Автор 2'
    },
    {
      image: 'assets/images/image3.png',
      title: 'Название книги 3',
      author: 'Автор 3'
    },
    {
      image: 'assets/images/image3.png',
      title: 'Название книги 3',
      author: 'Автор 3'
    },
    {
      image: 'assets/images/image3.png',
      title: 'Название книги 3',
      author: 'Автор 3'
    },
    {
      image: 'assets/images/image3.png',
      title: 'Название книги 3',
      author: 'Автор 3'
    },
    {
      image: 'assets/images/image3.png',
      title: 'Название книги 3',
      author: 'Автор 3'
    },
    {
      image: 'assets/images/image3.png',
      title: 'Название книги 3',
      author: 'Автор 3'
    },
    // Добавьте другие книги по аналогии
  ];
}
