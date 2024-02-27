import { TestBed } from '@angular/core/testing';

import { NftCategoriesService } from './nft-categories.service';

describe('NftCategoriesService', () => {
  let service: NftCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
