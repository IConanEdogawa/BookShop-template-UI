import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPlayerComponent } from './book-player.component';

describe('BookPlayerComponent', () => {
  let component: BookPlayerComponent;
  let fixture: ComponentFixture<BookPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
