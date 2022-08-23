/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoredetailspageComponent } from './moredetailspage.component';

describe('MoredetailspageComponent', () => {
  let component: MoredetailspageComponent;
  let fixture: ComponentFixture<MoredetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoredetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
