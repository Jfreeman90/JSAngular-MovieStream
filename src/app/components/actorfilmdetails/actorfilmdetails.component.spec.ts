import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorfilmdetailsComponent } from './actorfilmdetails.component';

describe('ActorfilmdetailsComponent', () => {
  let component: ActorfilmdetailsComponent;
  let fixture: ComponentFixture<ActorfilmdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorfilmdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorfilmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
