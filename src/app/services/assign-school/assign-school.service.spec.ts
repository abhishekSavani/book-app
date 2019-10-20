import { TestBed } from '@angular/core/testing';

import { AssignSchoolService } from './assign-school.service';

describe('AssignSchoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignSchoolService = TestBed.get(AssignSchoolService);
    expect(service).toBeTruthy();
  });
});
