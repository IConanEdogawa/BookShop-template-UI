import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corusel',
  templateUrl: './corusel.component.html',
  styleUrl: './corusel.component.scss'
})
export class CoruselComponent implements OnInit {
  items = [
    {
      image: 'assets/images/image1.png',
      poster: 'assets/images/image1.png',
      title: 'Book Title 1'
    },
    {
      image: 'assets/images/image2.png',
      poster: 'assets/images/image2.png',
      title: 'Book Title 2'
    },
    {
      image: 'assets/images/image3.png',
      poster: 'assets/images/image3.png',
      title: 'Book Title 3'
    }
  ];
  categories = ['All', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];
  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, 5000); // Меняем изображение каждые 5 секунд
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
