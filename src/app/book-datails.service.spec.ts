import { TestBed } from '@angular/core/testing';

import { BookDatailsService } from './book-datails.service';

describe('BookDatailsService', () => {
  let service: BookDatailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDatailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
