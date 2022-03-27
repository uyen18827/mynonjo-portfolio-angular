import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionGuideComponent } from './commission-guide.component';

describe('CommissionGuideComponent', () => {
  let component: CommissionGuideComponent;
  let fixture: ComponentFixture<CommissionGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
