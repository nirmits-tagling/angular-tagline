import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBoxesComponent } from './review-boxes.component';

describe('ReviewBoxesComponent', () => {
  let component: ReviewBoxesComponent;
  let fixture: ComponentFixture<ReviewBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
