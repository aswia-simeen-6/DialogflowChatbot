import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhygprecComponent } from './whygprec.component';

describe('WhygprecComponent', () => {
  let component: WhygprecComponent;
  let fixture: ComponentFixture<WhygprecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhygprecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhygprecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
