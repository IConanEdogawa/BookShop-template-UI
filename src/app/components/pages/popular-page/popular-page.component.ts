import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss'
})
export class PopularPageComponent implements OnInit {
  booksMonth = [
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

  booksWeek = [
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

  booksDay = [
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

  constructor() { }

  ngOnInit(): void { }
}
