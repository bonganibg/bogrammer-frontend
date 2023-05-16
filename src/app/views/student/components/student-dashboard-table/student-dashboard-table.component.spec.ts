import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardTableComponent } from './student-dashboard-table.component';

describe('StudentDashboardTableComponent', () => {
  let component: StudentDashboardTableComponent;
  let fixture: ComponentFixture<StudentDashboardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
