import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {
  @Input() popularBooks: any[] = [];
}
