import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmvideoComponent } from './filmvideo.component';

describe('FilmvideoComponent', () => {
  let component: FilmvideoComponent;
  let fixture: ComponentFixture<FilmvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmvideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
