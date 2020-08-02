import { TestBed, async, inject } from '@angular/core/testing';

import { AbokiGuard } from './aboki.guard';

describe('AbokiGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbokiGuard]
    });
  });

  it('should ...', inject([AbokiGuard], (guard: AbokiGuard) => {
    expect(guard).toBeTruthy();
  }));
});
