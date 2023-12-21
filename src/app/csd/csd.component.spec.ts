import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdComponent } from './csd.component';

describe('CsdComponent', () => {
  let component: CsdComponent;
  let fixture: ComponentFixture<CsdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsdComponent]
    });
    fixture = TestBed.createComponent(CsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
