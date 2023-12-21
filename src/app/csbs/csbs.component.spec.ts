import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsbsComponent } from './csbs.component';

describe('CsbsComponent', () => {
  let component: CsbsComponent;
  let fixture: ComponentFixture<CsbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsbsComponent]
    });
    fixture = TestBed.createComponent(CsbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
