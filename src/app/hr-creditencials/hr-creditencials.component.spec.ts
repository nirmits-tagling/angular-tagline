import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCreditencialsComponent } from './hr-creditencials.component';

describe('HrCreditencialsComponent', () => {
  let component: HrCreditencialsComponent;
  let fixture: ComponentFixture<HrCreditencialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrCreditencialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrCreditencialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
