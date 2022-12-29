import { TestBed } from '@angular/core/testing';

import { GlobalPresenceService } from './global-presence.service';

describe('GlobalPresenceService', () => {
  let service: GlobalPresenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalPresenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
