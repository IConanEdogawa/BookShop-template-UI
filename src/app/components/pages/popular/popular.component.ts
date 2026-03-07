import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book.model';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrl: './popular.component.scss',
    standalone: false
})
export class PopularComponent {
  @Input() popularBooks: Book[] = [];
}
