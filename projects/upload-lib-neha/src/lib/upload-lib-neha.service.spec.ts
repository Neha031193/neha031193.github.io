import { TestBed } from '@angular/core/testing';

import { UploadLibNehaService } from './upload-lib-neha.service';

describe('UploadLibNehaService', () => {
  let service: UploadLibNehaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadLibNehaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
