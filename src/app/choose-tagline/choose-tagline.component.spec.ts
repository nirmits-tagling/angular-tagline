import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTaglineComponent } from './choose-tagline.component';

describe('ChooseTaglineComponent', () => {
  let component: ChooseTaglineComponent;
  let fixture: ComponentFixture<ChooseTaglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTaglineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
