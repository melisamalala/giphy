import { TestBed, inject } from '@angular/core/testing';

import { GiphypullService } from './giphypull.service';

describe('GiphypullService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphypullService]
    });
  });

  it('should be created', inject([GiphypullService], (service: GiphypullService) => {
    expect(service).toBeTruthy();
  }));
});
