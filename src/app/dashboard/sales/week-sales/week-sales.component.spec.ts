import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSalesComponent } from './week-sales.component';

describe('WeekSalesComponent', () => {
  let component: WeekSalesComponent;
  let fixture: ComponentFixture<WeekSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekSalesComponent]
    });
    fixture = TestBed.createComponent(WeekSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
