import { TestBed } from '@angular/core/testing';

import { HotelmanagmentserviceService } from './hotelmanagmentservice.service';

describe('HotelmanagmentserviceService', () => {
  let service: HotelmanagmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelmanagmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
