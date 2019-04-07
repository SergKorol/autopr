import { TestBed, async, inject } from '@angular/core/testing';

import { EnterGuard } from './enter.guard';

describe('EnterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterGuard]
    });
  });

  it('should ...', inject([EnterGuard], (guard: EnterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
