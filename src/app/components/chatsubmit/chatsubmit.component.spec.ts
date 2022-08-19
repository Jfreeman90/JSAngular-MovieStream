import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsubmitComponent } from './chatsubmit.component';

describe('ChatsubmitComponent', () => {
  let component: ChatsubmitComponent;
  let fixture: ComponentFixture<ChatsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
