import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface User {
  id: number;
  name: string;
}

interface Book {
  image: any;
  title: string;
  originalTitle: string;
  country: string;
  year: string;
  status: string;
  tags: string[];
  rate: string;
  view: string;
  likes: string;
  saved: string;
  description: string;
  publisher?: string;
  author?: string;
  artist?: string;
  translator?: string;
  users: User[];
}

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent {
  user1 = {
    id: 1,
    name: 'John Doe'
}
user2 = {
    id: 2,
    name: 'Enteny Stark'
}

  book: Book = {
      image: '/assets/images/image1.png',
      title: 'Harry Potter and the Philosopher\'s Stone',
      originalTitle: 'Harry Potter and the Philosopher\'s Stone',
      country: 'EU',
      year: '1997',
      status: 'completed',
      tags: ['magic', 'fantasy'],
      rate: '9.5',
      view: '10.6k',
      likes: '125k',
      publisher: 'Penguin Random House', 
      author: 'J.K. Rowling', 
      artist: 'J.K. Rowling',
      translator: 'J.K. Rowling',
      saved: '35k',
      description: 'This is the description of the book.',
      users: [this.user1, this.user2]
  };

  selectedStatus = 'Choose a status';
  statuses = ['Choose a status', 'Started', 'Stopped', 'Liked'];

  // route ga ID berish va API ga ulash kerak.
}
