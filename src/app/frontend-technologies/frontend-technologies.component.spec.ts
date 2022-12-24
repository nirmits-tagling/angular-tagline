import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendTechnologiesComponent } from './frontend-technologies.component';

describe('FrontendTechnologiesComponent', () => {
  let component: FrontendTechnologiesComponent;
  let fixture: ComponentFixture<FrontendTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
