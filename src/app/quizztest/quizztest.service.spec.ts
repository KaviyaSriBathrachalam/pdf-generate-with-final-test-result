import { TestBed, inject } from '@angular/core/testing';

import { QuizztestService } from './quizztest.service';

describe('QuizztestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizztestService]
    });
  });

  it('should be created', inject([QuizztestService], (service: QuizztestService) => {
    expect(service).toBeTruthy();
  }));
});
