import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbsComponent } from './hbs.component';

describe('HbsComponent', () => {
  let component: HbsComponent;
  let fixture: ComponentFixture<HbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HbsComponent]
    });
    fixture = TestBed.createComponent(HbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
