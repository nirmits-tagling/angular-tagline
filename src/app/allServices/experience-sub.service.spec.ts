import { TestBed } from '@angular/core/testing';

import { ExperienceSubService } from './experience-sub.service';

describe('ExperienceSubService', () => {
  let service: ExperienceSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
