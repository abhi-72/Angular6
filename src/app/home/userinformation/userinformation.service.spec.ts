import { TestBed, inject } from '@angular/core/testing';

import { UserinformationService } from './userinformation.service';

describe('UserinformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserinformationService]
    });
  });

  it('should be created', inject([UserinformationService], (service: UserinformationService) => {
    expect(service).toBeTruthy();
  }));
});
