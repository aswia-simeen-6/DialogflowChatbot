import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivComponent } from './civ.component';

describe('CivComponent', () => {
  let component: CivComponent;
  let fixture: ComponentFixture<CivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivComponent]
    });
    fixture = TestBed.createComponent(CivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
