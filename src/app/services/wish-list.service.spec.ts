import { TestBed } from '@angular/core/testing';

import { WishListService } from './wish-list.service';

describe('WishlistService', () => {
  let service: WishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
