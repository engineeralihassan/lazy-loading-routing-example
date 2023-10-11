import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySalesComponent } from './today-sales.component';

describe('TodaySalesComponent', () => {
  let component: TodaySalesComponent;
  let fixture: ComponentFixture<TodaySalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaySalesComponent]
    });
    fixture = TestBed.createComponent(TodaySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
