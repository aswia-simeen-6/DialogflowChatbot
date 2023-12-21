import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamcellComponent } from './examcell.component';

describe('ExamcellComponent', () => {
  let component: ExamcellComponent;
  let fixture: ComponentFixture<ExamcellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamcellComponent]
    });
    fixture = TestBed.createComponent(ExamcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
