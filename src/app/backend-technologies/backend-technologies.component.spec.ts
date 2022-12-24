import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendTechnologiesComponent } from './backend-technologies.component';

describe('BackendTechnologiesComponent', () => {
  let component: BackendTechnologiesComponent;
  let fixture: ComponentFixture<BackendTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
