import { TestBed } from '@angular/core/testing';

import { cartService } from './cart.service';

describe('CartService', () => {
  let service: cartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
