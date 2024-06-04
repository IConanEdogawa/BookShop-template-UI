import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageFooterComponent } from './card-page-footer.component';

describe('CardPageFooterComponent', () => {
  let component: CardPageFooterComponent;
  let fixture: ComponentFixture<CardPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPageFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
