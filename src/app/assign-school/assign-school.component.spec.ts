import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSchoolComponent } from './assign-school.component';

describe('AssignSchoolComponent', () => {
  let component: AssignSchoolComponent;
  let fixture: ComponentFixture<AssignSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
