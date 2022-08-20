import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleitemComponent } from './scheduleitem.component';

describe('ScheduleitemComponent', () => {
  let component: ScheduleitemComponent;
  let fixture: ComponentFixture<ScheduleitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
