import { TestBed } from '@angular/core/testing';

import { NewsFeed } from './news-feed';

describe('NewsFeed', () => {
  let service: NewsFeed;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeed);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
