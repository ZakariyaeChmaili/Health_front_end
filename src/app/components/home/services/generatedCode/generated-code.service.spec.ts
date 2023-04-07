import { TestBed } from '@angular/core/testing';

import { GeneratedCodeService } from './generated-code.service';

describe('GeneratedCodeService', () => {
  let service: GeneratedCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratedCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
