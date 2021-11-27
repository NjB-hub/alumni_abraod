import { TestBed } from '@angular/core/testing';

import { NavHomeService } from './nav-home.service';

describe('NavHomeService', () => {
  let service: NavHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
