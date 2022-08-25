/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataSharingServiceService } from './DataSharingService.service';

describe('Service: DataSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSharingServiceService]
    });
  });

  it('should ...', inject([DataSharingServiceService], (service: DataSharingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
