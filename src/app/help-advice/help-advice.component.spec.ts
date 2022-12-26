import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAdviceComponent } from './help-advice.component';

describe('HelpAdviceComponent', () => {
  let component: HelpAdviceComponent;
  let fixture: ComponentFixture<HelpAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
